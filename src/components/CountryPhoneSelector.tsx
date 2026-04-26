'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Phone } from 'lucide-react'
import { countries, getCountryByCode, formatPhoneNumber, validatePhoneNumber } from '@/utils/countryPhoneData'
import { getUserCountryCode, getClientCountryCode } from '@/utils/geolocation'

interface CountryPhoneSelectorProps {
  value: string
  onChange: (phone: string, countryCode: string) => void
  onBlur?: () => void
  error?: string
  disabled?: boolean
  className?: string
}

export default function CountryPhoneSelector({
  value,
  onChange,
  onBlur,
  error,
  disabled = false,
  className = ''
}: CountryPhoneSelectorProps) {
  const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.code === 'US') || countries[0])
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Detect user's country on mount
  useEffect(() => {
    const detectCountry = async () => {
      try {
        // Try IP-based detection first
        const countryCode = await getUserCountryCode()
        const country = getCountryByCode(countryCode) || getCountryByCode('US') || countries[0]
        setSelectedCountry(country)
      } catch (error) {
        // Fallback to browser language detection
        const fallbackCode = getClientCountryCode()
        const country = getCountryByCode(fallbackCode) || getCountryByCode('US') || countries[0]
        setSelectedCountry(country)
      } finally {
        setIsLoading(false)
      }
    }

    detectCountry()
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Handle phone number input
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    
    // Only allow digits and +
    const cleaned = input.replace(/[^\d+]/g, '')
    
    // Limit to country's max length
    const maxLength = selectedCountry.maxLength
    const limited = cleaned.slice(0, maxLength)
    
    setPhoneNumber(limited)
    
    // Format and send to parent
    const formatted = formatPhoneNumber(limited, selectedCountry.code)
    onChange(formatted, selectedCountry.code)
  }

  // Handle country selection
  const handleCountrySelect = (country: typeof selectedCountry) => {
    setSelectedCountry(country)
    setIsOpen(false)
    
    // Reformat phone number with new country code
    const formatted = formatPhoneNumber(phoneNumber, country.code)
    setPhoneNumber(formatted)
    onChange(formatted, country.code)
  }

  // Initialize phone number from props
  useEffect(() => {
    if (value && !phoneNumber) {
      setPhoneNumber(value)
    }
  }, [value, phoneNumber])

  // Extract phone number without country code for display
  const displayPhone = phoneNumber.replace(selectedCountry.dialCode, '').trim()

  return (
    <div className={`relative ${className}`}>
      <div className="flex">
        {/* Country Selector */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => !disabled && setIsOpen(!isOpen)}
            disabled={disabled || isLoading}
            className={`flex items-center px-3 py-3 bg-surface border rounded-l-lg border-r-0 transition-colors duration-300 ${
              error
                ? 'border-red-500 hover:border-red-600'
                : 'border-gray-300 hover:border-accent-gold'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            aria-label="Select country"
          >
            {isLoading ? (
              <div className="w-6 h-4 bg-gray-300 rounded animate-pulse" />
            ) : (
              <>
                <span className="text-lg mr-2">{selectedCountry.flag}</span>
                <span className="text-sm font-medium text-gray-700 mr-1">
                  {selectedCountry.dialCode}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </>
            )}
          </button>

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
              <div className="p-2">
                {countries.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => handleCountrySelect(country)}
                    className={`w-full flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors duration-150 ${
                      selectedCountry.code === country.code ? 'bg-accent-gold text-white' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-lg mr-3">{country.flag}</span>
                    <span className="font-medium">{country.dialCode}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Phone Input */}
        <div className="relative flex-1">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            value={displayPhone}
            onChange={handlePhoneChange}
            onBlur={onBlur}
            disabled={disabled}
            placeholder={selectedCountry.phoneExample.replace(selectedCountry.dialCode, '')}
            className={`w-full pl-10 pr-4 py-3 bg-surface border rounded-r-lg transition-colors duration-300 text-black ${
              error
                ? 'border-red-500 focus:border-red-600'
                : 'border-gray-300 focus:border-accent-gold'
            } focus:outline-none ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Phone number"
          />
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}

      {/* Helper Text */}
      {!error && (
        <p className="mt-1 text-xs text-gray-500">
          Format: {selectedCountry.phoneExample}
        </p>
      )}
    </div>
  )
}
