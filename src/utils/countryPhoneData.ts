export interface Country {
  code: string
  name: string
  dialCode: string
  flag: string
  phoneFormat: RegExp
  phoneExample: string
  maxLength: number
}

export const countries: Country[] = [
  // Major countries first
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸', phoneFormat: /^\+1\d{10}$/, phoneExample: '+12125551234', maxLength: 12 },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧', phoneFormat: /^\+44\d{10}$/, phoneExample: '+442071234567', maxLength: 13 },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦', phoneFormat: /^\+1\d{10}$/, phoneExample: '+14165551234', maxLength: 12 },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺', phoneFormat: /^\+61\d{9}$/, phoneExample: '+61212345678', maxLength: 12 },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪', phoneFormat: /^\+49\d{10,11}$/, phoneExample: '+491234567890', maxLength: 14 },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷', phoneFormat: /^\+33\d{9}$/, phoneExample: '+33123456789', maxLength: 12 },
  { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹', phoneFormat: /^\+39\d{9,10}$/, phoneExample: '+391234567890', maxLength: 13 },
  { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸', phoneFormat: /^\+34\d{9}$/, phoneExample: '+34123456789', maxLength: 12 },
  { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱', phoneFormat: /^\+31\d{9}$/, phoneExample: '+31123456789', maxLength: 12 },
  { code: 'BE', name: 'Belgium', dialCode: '+32', flag: '🇧🇪', phoneFormat: /^\+32\d{9}$/, phoneExample: '+32123456789', maxLength: 12 },
  { code: 'CH', name: 'Switzerland', dialCode: '+41', flag: '🇨🇭', phoneFormat: /^\+41\d{9}$/, phoneExample: '+41123456789', maxLength: 12 },
  { code: 'AT', name: 'Austria', dialCode: '+43', flag: '🇦🇹', phoneFormat: /^\+43\d{10,11}$/, phoneExample: '+43123456789', maxLength: 14 },
  { code: 'SE', name: 'Sweden', dialCode: '+46', flag: '🇸🇪', phoneFormat: /^\+46\d{9}$/, phoneExample: '+46123456789', maxLength: 12 },
  { code: 'NO', name: 'Norway', dialCode: '+47', flag: '🇳🇴', phoneFormat: /^\+47\d{8}$/, phoneExample: '+4712345678', maxLength: 11 },
  { code: 'DK', name: 'Denmark', dialCode: '+45', flag: '🇩🇰', phoneFormat: /^\+45\d{8}$/, phoneExample: '+4512345678', maxLength: 11 },
  { code: 'FI', name: 'Finland', flag: '🇫🇮', dialCode: '+358', phoneFormat: /^\+358\d{9}$/, phoneExample: '+358123456789', maxLength: 13 },
  { code: 'IE', name: 'Ireland', dialCode: '+353', flag: '🇮🇪', phoneFormat: /^\+353\d{9}$/, phoneExample: '+353123456789', maxLength: 13 },
  { code: 'PT', name: 'Portugal', dialCode: '+351', flag: '🇵🇹', phoneFormat: /^\+351\d{9}$/, phoneExample: '+351123456789', maxLength: 13 },
  { code: 'GR', name: 'Greece', dialCode: '+30', flag: '🇬🇷', phoneFormat: /^\+30\d{10}$/, phoneExample: '+301234567890', maxLength: 13 },
  { code: 'CZ', name: 'Czech Republic', dialCode: '+420', flag: '🇨🇿', phoneFormat: /^\+420\d{9}$/, phoneExample: '+420123456789', maxLength: 13 },
  { code: 'PL', name: 'Poland', dialCode: '+48', flag: '🇵🇱', phoneFormat: /^\+48\d{9}$/, phoneExample: '+48123456789', maxLength: 13 },
  { code: 'HU', name: 'Hungary', dialCode: '+36', flag: '🇭🇺', phoneFormat: /^\+36\d{9}$/, phoneExample: '+36123456789', maxLength: 12 },
  { code: 'RO', name: 'Romania', dialCode: '+40', flag: '🇷🇴', phoneFormat: /^\+40\d{9}$/, phoneExample: '+40123456789', maxLength: 12 },
  { code: 'BG', name: 'Bulgaria', dialCode: '+359', flag: '🇧🇬', phoneFormat: /^\+359\d{9}$/, phoneExample: '+359123456789', maxLength: 13 },
  { code: 'HR', name: 'Croatia', dialCode: '+385', flag: '🇭🇷', phoneFormat: /^\+385\d{9}$/, phoneExample: '+385123456789', maxLength: 13 },
  { code: 'SI', name: 'Slovenia', dialCode: '+386', flag: '🇸🇮', phoneFormat: /^\+386\d{9}$/, phoneExample: '+386123456789', maxLength: 13 },
  { code: 'SK', name: 'Slovakia', dialCode: '+421', flag: '🇸🇰', phoneFormat: /^\+421\d{9}$/, phoneExample: '+421123456789', maxLength: 13 },
  { code: 'EE', name: 'Estonia', dialCode: '+372', flag: '🇪🇪', phoneFormat: /^\+372\d{7,8}$/, phoneExample: '+37212345678', maxLength: 12 },
  { code: 'LV', name: 'Latvia', dialCode: '+371', flag: '🇱🇻', phoneFormat: /^\+371\d{8}$/, phoneExample: '+37112345678', maxLength: 12 },
  { code: 'LT', name: 'Lithuania', dialCode: '+370', flag: '🇱🇹', phoneFormat: /^\+370\d{8}$/, phoneExample: '+37012345678', maxLength: 12 },
  
  // Asian countries
  { code: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳', phoneFormat: /^\+86\d{11}$/, phoneExample: '+8612345678901', maxLength: 14 },
  { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵', phoneFormat: /^\+81\d{9,10}$/, phoneExample: '+81123456789', maxLength: 13 },
  { code: 'KR', name: 'South Korea', dialCode: '+82', flag: '🇰🇷', phoneFormat: /^\+82\d{9,10}$/, phoneExample: '+82123456789', maxLength: 13 },
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳', phoneFormat: /^\+91\d{10}$/, phoneExample: '+911234567890', maxLength: 13 },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬', phoneFormat: /^\+65\d{8}$/, phoneExample: '+6512345678', maxLength: 11 },
  { code: 'MY', name: 'Malaysia', dialCode: '+60', flag: '🇲🇾', phoneFormat: /^\+60\d{9,10}$/, phoneExample: '+60123456789', maxLength: 13 },
  { code: 'TH', name: 'Thailand', dialCode: '+66', flag: '🇹🇭', phoneFormat: /^\+66\d{9}$/, phoneExample: '+66123456789', maxLength: 12 },
  { code: 'VN', name: 'Vietnam', dialCode: '+84', flag: '🇻🇳', phoneFormat: /^\+84\d{9,10}$/, phoneExample: '+84123456789', maxLength: 13 },
  { code: 'PH', name: 'Philippines', dialCode: '+63', flag: '🇵🇭', phoneFormat: /^\+63\d{10}$/, phoneExample: '+631234567890', maxLength: 13 },
  { code: 'ID', name: 'Indonesia', dialCode: '+62', flag: '🇮🇩', phoneFormat: /^\+62\d{9,12}$/, phoneExample: '+62123456789', maxLength: 15 },
  { code: 'HK', name: 'Hong Kong', dialCode: '+852', flag: '🇭🇰', phoneFormat: /^\+852\d{8}$/, phoneExample: '+85212345678', maxLength: 12 },
  { code: 'TW', name: 'Taiwan', dialCode: '+886', flag: '🇹🇼', phoneFormat: /^\+886\d{9}$/, phoneExample: '+886123456789', maxLength: 13 },
  { code: 'IL', name: 'Israel', dialCode: '+972', flag: '🇮🇱', phoneFormat: /^\+972\d{9}$/, phoneExample: '+972123456789', maxLength: 13 },
  { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', flag: '🇦🇪', phoneFormat: /^\+971\d{9}$/, phoneExample: '+971123456789', maxLength: 13 },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦', phoneFormat: /^\+966\d{9}$/, phoneExample: '+966123456789', maxLength: 13 },
  { code: 'TR', name: 'Turkey', dialCode: '+90', flag: '🇹🇷', phoneFormat: /^\+90\d{10}$/, phoneExample: '+901234567890', maxLength: 13 },
  
  // Middle East & Africa
  { code: 'EG', name: 'Egypt', dialCode: '+20', flag: '🇪🇬', phoneFormat: /^\+20\d{10}$/, phoneExample: '+201234567890', maxLength: 13 },
  { code: 'ZA', name: 'South Africa', dialCode: '+27', flag: '🇿🇦', phoneFormat: /^\+27\d{9}$/, phoneExample: '+27123456789', maxLength: 12 },
  { code: 'NG', name: 'Nigeria', dialCode: '+234', flag: '🇳🇬', phoneFormat: /^\+234\d{10}$/, phoneExample: '+2341234567890', maxLength: 14 },
  { code: 'KE', name: 'Kenya', dialCode: '+254', flag: '🇰🇪', phoneFormat: /^\+254\d{9}$/, phoneExample: '+254123456789', maxLength: 13 },
  { code: 'GH', name: 'Ghana', dialCode: '+233', flag: '🇬🇭', phoneFormat: /^\+233\d{9}$/, phoneExample: '+233123456789', maxLength: 13 },
  
  // Americas (excluding US/CA already listed)
  { code: 'MX', name: 'Mexico', dialCode: '+52', flag: '🇲🇽', phoneFormat: /^\+52\d{10}$/, phoneExample: '+521234567890', maxLength: 13 },
  { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷', phoneFormat: /^\+55\d{10,11}$/, phoneExample: '+551234567890', maxLength: 14 },
  { code: 'AR', name: 'Argentina', dialCode: '+54', flag: '🇦🇷', phoneFormat: /^\+54\d{10}$/, phoneExample: '+541234567890', maxLength: 13 },
  { code: 'CL', name: 'Chile', dialCode: '+56', flag: '🇨🇱', phoneFormat: /^\+56\d{9}$/, phoneExample: '+56123456789', maxLength: 12 },
  { code: 'CO', name: 'Colombia', dialCode: '+57', flag: '🇨🇴', phoneFormat: /^\+57\d{10}$/, phoneExample: '+571234567890', maxLength: 13 },
  { code: 'PE', name: 'Peru', dialCode: '+51', flag: '🇵🇪', phoneFormat: /^\+51\d{9}$/, phoneExample: '+51123456789', maxLength: 12 },
  { code: 'VE', name: 'Venezuela', dialCode: '+58', flag: '🇻🇪', phoneFormat: /^\+58\d{10}$/, phoneExample: '+581234567890', maxLength: 13 },
  
  // Pakistan and South Asia
  { code: 'PK', name: 'Pakistan', dialCode: '+92', flag: '🇵🇰', phoneFormat: /^\+92\d{10}$/, phoneExample: '+921234567890', maxLength: 13 },
  { code: 'BD', name: 'Bangladesh', dialCode: '+880', flag: '🇧🇩', phoneFormat: /^\+880\d{10}$/, phoneExample: '+8801234567890', maxLength: 14 },
  { code: 'LK', name: 'Sri Lanka', dialCode: '+94', flag: '🇱🇰', phoneFormat: /^\+94\d{9}$/, phoneExample: '+94123456789', maxLength: 12 },
  { code: 'NP', name: 'Nepal', dialCode: '+977', flag: '🇳🇵', phoneFormat: /^\+977\d{9}$/, phoneExample: '+977123456789', maxLength: 13 },
  { code: 'MM', name: 'Myanmar', dialCode: '+95', flag: '🇲🇲', phoneFormat: /^\+95\d{9,10}$/, phoneExample: '+95123456789', maxLength: 13 },
  
  // Oceania (excluding AU already listed)
  { code: 'NZ', name: 'New Zealand', dialCode: '+64', flag: '🇳🇿', phoneFormat: /^\+64\d{8,9}$/, phoneExample: '+64123456789', maxLength: 13 },
  { code: 'FJ', name: 'Fiji', dialCode: '+679', flag: '🇫🇯', phoneFormat: /^\+679\d{7}$/, phoneExample: '+6791234567', maxLength: 12 },
  
  // Other notable countries
  { code: 'RU', name: 'Russia', dialCode: '+7', flag: '🇷🇺', phoneFormat: /^\+7\d{10}$/, phoneExample: '+71234567890', maxLength: 12 },
  { code: 'UA', name: 'Ukraine', dialCode: '+380', flag: '🇺🇦', phoneFormat: /^\+380\d{9}$/, phoneExample: '+380123456789', maxLength: 14 },
  { code: 'BY', name: 'Belarus', dialCode: '+375', flag: '🇧🇾', phoneFormat: /^\+375\d{9}$/, phoneExample: '+375123456789', maxLength: 13 },
  { code: 'KZ', name: 'Kazakhstan', dialCode: '+7', flag: '🇰🇿', phoneFormat: /^\+7\d{10}$/, phoneExample: '+71234567890', maxLength: 12 },
  { code: 'UZ', name: 'Uzbekistan', dialCode: '+998', flag: '🇺🇿', phoneFormat: /^\+998\d{9}$/, phoneExample: '+998123456789', maxLength: 13 },
  { code: 'MN', name: 'Mongolia', dialCode: '+976', flag: '🇲🇳', phoneFormat: /^\+976\d{8}$/, phoneExample: '+97612345678', maxLength: 12 },
  { code: 'KP', name: 'North Korea', dialCode: '+850', flag: '🇰🇵', phoneFormat: /^\+850\d{9,10}$/, phoneExample: '+850123456789', maxLength: 14 },
]

// IP to country mapping (simplified for common regions)
export const ipCountryMap: { [key: string]: string } = {
  // North America
  'US': 'US',
  'CA': 'CA',
  'MX': 'MX',
  
  // Europe
  'GB': 'GB',
  'DE': 'DE',
  'FR': 'FR',
  'IT': 'IT',
  'ES': 'ES',
  'NL': 'NL',
  'BE': 'BE',
  'CH': 'CH',
  'AT': 'AT',
  'SE': 'SE',
  'NO': 'NO',
  'DK': 'DK',
  'FI': 'FI',
  'IE': 'IE',
  'PT': 'PT',
  'GR': 'GR',
  'CZ': 'CZ',
  'PL': 'PL',
  'HU': 'HU',
  'RO': 'RO',
  'BG': 'BG',
  'HR': 'HR',
  'SI': 'SI',
  'SK': 'SK',
  'EE': 'EE',
  'LV': 'LV',
  'LT': 'LT',
  'RU': 'RU',
  'UA': 'UA',
  'BY': 'BY',
  
  // Asia
  'CN': 'CN',
  'JP': 'JP',
  'KR': 'KR',
  'IN': 'IN',
  'SG': 'SG',
  'MY': 'MY',
  'TH': 'TH',
  'VN': 'VN',
  'PH': 'PH',
  'ID': 'ID',
  'HK': 'HK',
  'TW': 'TW',
  'PK': 'PK',
  'BD': 'BD',
  'LK': 'LK',
  'NP': 'NP',
  'MM': 'MM',
  
  // Middle East
  'IL': 'IL',
  'AE': 'AE',
  'SA': 'SA',
  'TR': 'TR',
  'EG': 'EG',
  
  // Africa
  'ZA': 'ZA',
  'NG': 'NG',
  'KE': 'KE',
  'GH': 'GH',
  
  // Oceania
  'AU': 'AU',
  'NZ': 'NZ',
  'FJ': 'FJ',
  
  // South America
  'BR': 'BR',
  'AR': 'AR',
  'CL': 'CL',
  'CO': 'CO',
  'PE': 'PE',
  'VE': 'VE',
}

export function getCountryByCode(code: string): Country | undefined {
  return countries.find(country => country.code === code)
}

export function validatePhoneNumber(phone: string, countryCode: string): boolean {
  const country = getCountryByCode(countryCode)
  if (!country) return false
  
  return country.phoneFormat.test(phone)
}

export function formatPhoneNumber(phone: string, countryCode: string): string {
  const country = getCountryByCode(countryCode)
  if (!country) return phone
  
  // Remove all non-digit characters except +
  let cleaned = phone.replace(/[^\d+]/g, '')
  
  // Ensure it starts with the country dial code
  if (!cleaned.startsWith(country.dialCode)) {
    cleaned = country.dialCode + cleaned.replace(country.dialCode, '')
  }
  
  return cleaned
}
