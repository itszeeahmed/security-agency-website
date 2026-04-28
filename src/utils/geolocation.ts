import { ipCountryMap, getCountryByCode } from './countryPhoneData'

export interface LocationInfo {
  country: string
  countryCode: string
  city?: string
  region?: string
  ip: string
}

// Free IP geolocation services - ordered by reliability
const GEOLOCATION_APIS = [
  {
    name: 'ip-api.com',
    url: 'http://ip-api.com/json/',
    parser: (data: any) => ({
      country: data.country,
      countryCode: data.countryCode,
      city: data.city,
      region: data.regionName,
      ip: data.query
    })
  },
  {
    name: 'ipinfo.io',
    url: 'https://ipinfo.io/json',
    parser: (data: any) => ({
      country: data.country,
      countryCode: data.country,
      city: data.city,
      region: data.region,
      ip: data.ip
    })
  },
  {
    name: 'ipapi.co',
    url: 'https://ipapi.co/json/',
    parser: (data: any) => ({
      country: data.country_name,
      countryCode: data.country_code,
      city: data.city,
      region: data.region,
      ip: data.ip
    })
  }
]

export async function getUserLocation(): Promise<LocationInfo | null> {
  // Try each geolocation API until one works
  for (const api of GEOLOCATION_APIS) {
    try {
      const response = await fetch(api.url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        signal: AbortSignal.timeout(3000) // 3 second timeout
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const data = await response.json()
      const location = api.parser(data)
      
      // Validate we have the minimum required data
      if (location.countryCode && location.country) {
        return location
      }
    } catch (error) {
      // Silently continue to next API without spamming console
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        // CORS or network error - try next API silently
        continue
      }
      continue // Try next API
    }
  }

  // If all APIs fail, return null
  return null
}

export async function getUserCountryCode(): Promise<string> {
  try {
    const location = await getUserLocation()
    if (location && location.countryCode) {
      return location.countryCode
    }
  } catch (error) {
    console.warn('Failed to get user country code:', error)
  }

  // Fallback to browser language or default to US
  const browserLanguage = navigator.language || (navigator as any).userLanguage
  const langCode = browserLanguage.split('-')[1]?.toUpperCase()
  
  return ipCountryMap[langCode || ''] || 'US'
}

export async function getDefaultCountryForIP(ip: string): Promise<string> {
  // This is a simplified mapping for common IP ranges
  // In a real application, you'd use a proper IP geolocation database
  
  if (ip.startsWith('192.168.') || ip.startsWith('10.') || ip.startsWith('172.')) {
    // Private IP - use browser language detection
    return await getUserCountryCode()
  }

  // Common public IP ranges (simplified)
  if (ip.startsWith('8.') || ip.startsWith('24.') || ip.startsWith('64.') || ip.startsWith('68.') || ip.startsWith('72.') || ip.startsWith('76.') || ip.startsWith('96.') || ip.startsWith('174.')) {
    return 'US' // Common US IP ranges
  }
  
  if (ip.startsWith('2.') || ip.startsWith('5.') || ip.startsWith('31.') || ip.startsWith('46.') || ip.startsWith('62.')) {
    return 'DE' // Common German IP ranges
  }
  
  if (ip.startsWith('5.') || ip.startsWith('31.') || ip.startsWith('46.') || ip.startsWith('77.') || ip.startsWith('88.')) {
    return 'GB' // Common UK IP ranges
  }

  // Default fallback
  return 'US'
}

// Synchronous version for server-side use
export function getDefaultCountryForIPSync(ip: string): string {
  // This is a simplified mapping for common IP ranges
  
  if (ip.startsWith('192.168.') || ip.startsWith('10.') || ip.startsWith('172.')) {
    // Private IP - default to US for server-side
    return 'US'
  }

  // Common public IP ranges (simplified)
  if (ip.startsWith('8.') || ip.startsWith('24.') || ip.startsWith('64.') || ip.startsWith('68.') || ip.startsWith('72.') || ip.startsWith('76.') || ip.startsWith('96.') || ip.startsWith('174.')) {
    return 'US' // Common US IP ranges
  }
  
  if (ip.startsWith('2.') || ip.startsWith('5.') || ip.startsWith('31.') || ip.startsWith('46.') || ip.startsWith('62.')) {
    return 'DE' // Common German IP ranges
  }
  
  if (ip.startsWith('5.') || ip.startsWith('31.') || ip.startsWith('46.') || ip.startsWith('77.') || ip.startsWith('88.')) {
    return 'GB' // Common UK IP ranges
  }

  // Default fallback
  return 'US'
}

// Client-side detection (less accurate but doesn't require API calls)
export function getClientCountryCode(): string {
  const browserLanguage = navigator.language || (navigator as any).userLanguage
  const langCode = browserLanguage.split('-')[1]?.toUpperCase()
  
  return ipCountryMap[langCode || ''] || 'US'
}

// Server-side detection helper (for API routes)
export function getCountryFromHeaders(headers: Headers): string {
  // Try Cloudflare country header first
  const cfCountry = headers.get('cf-ipcountry')
  if (cfCountry && cfCountry.length === 2) {
    return cfCountry.toUpperCase()
  }

  // Try other common headers
  const countryHeaders = [
    'x-country-code',
    'x-visitor-country',
    'geoip_country_code',
    'cloudfront-viewer-country'
  ]

  for (const header of countryHeaders) {
    const country = headers.get(header)
    if (country && country.length === 2) {
      return country.toUpperCase()
    }
  }

  // Fallback to IP-based detection
  const ip = headers.get('x-forwarded-for') || 
              headers.get('x-real-ip') || 
              headers.get('cf-connecting-ip') || 
              'unknown'

  if (ip && ip !== 'unknown') {
    // For server-side, we need to handle this differently since it's sync
    // Use a simplified synchronous fallback
    return getDefaultCountryForIPSync(ip.split(',')[0].trim())
  }

  // Final fallback
  return 'US'
}
