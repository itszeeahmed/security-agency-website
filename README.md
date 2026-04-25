# Vision Defence Security Website

A modern, cinematic single-page website for Vision Defence Security, a UK-based security agency. Built with Next.js 14, featuring a dramatic page loader, smooth animations, and a premium tactical aesthetic.

## Features

### 🎬 Cinematic Page Loader
- Full-screen loader with progress bar and cycling status messages
- Curtain split reveal animation (top/bottom panels slide away)
- Session-based loading (only shows once per browser session)
- Gold accent animations and corner decorations

### ✨ Animations & Interactions
- **Framer Motion**: Smooth scroll-triggered animations
- **tsParticles**: Interactive gold particle network in hero section
- **Hover Effects**: Border sweeps, scale transforms, and color transitions
- **Counters**: Animated statistics using react-countup
- **Micro-interactions**: Button ripples, navigation pulse effects

### 🎨 Design System
- **Color Palette**: Tactical black/gold theme
  - Primary: `#0b0c0f` (deep tactical black)
  - Surface: `#111318` (card/section surface)
  - Accent Gold: `#c8973a` (primary brand accent)
  - Accent Light: `#e8b84b` (hover state gold)
- **Typography**: 
  - Bebas Neue (headings)
  - Barlow (body text)
  - Barlow Condensed (UI elements)
- **Responsive**: Mobile-first design with Tailwind CSS

### 📱 Sections
1. **Hero Section**: tsParticles background, staggered content reveal
2. **Navigation**: Sticky header with pulse animation on CTA
3. **Services**: 2-column grid with hover border animations
4. **Why Choose Us**: 3×2 feature grid with left border sweeps
5. **Stats Bar**: Animated counters with hover underlines
6. **Industries**: 5-column icon grid with fill animations
7. **CTA Banner**: Gradient background with decorative circles
8. **Footer**: 4-column layout with social links

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom CSS variables
- **Animations**: Framer Motion
- **Particles**: tsParticles
- **Icons**: Lucide React
- **Counters**: react-countup
- **Fonts**: Google Fonts (Bebas Neue, Barlow family)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd visiondefence-security
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with PageLoader
│   └── page.tsx            # Main page assembly
├── components/
│   ├── PageLoader.tsx      # Cinematic loader component
│   ├── Navigation.tsx      # Sticky navigation
│   ├── HeroSection.tsx     # Hero with particles
│   ├── ServicesSection.tsx # Services grid
│   ├── WhyUsSection.tsx    # Why choose us features
│   ├── StatsBar.tsx        # Animated statistics
│   ├── IndustriesSection.tsx # Industry icons
│   ├── CtaBanner.tsx       # Call-to-action banner
│   ├── Footer.tsx          # Footer with links
│   └── ScrollReveal.tsx    # Reusable animation wrapper
└── styles/
    └── globals.css         # Global styles and animations
```

## Animation Details

### Page Loader Sequence
1. **Mount**: Full-screen overlay with logo and progress bar
2. **Progress**: 2.2s fill animation with status text cycling
3. **Exit**: Curtain split animation (0.8s)
4. **Reveal**: Site content fades in (0.6s)

### Scroll Animations
- **ScrollReveal Component**: Reusable wrapper with IntersectionObserver
- **Stagger Effects**: Sequential animations for card grids
- **While-in-view**: Triggers when elements enter viewport

### Hover Effects
- **Service Cards**: Bottom border sweep (left→right)
- **Why Us Cards**: Left border sweep (top→bottom)
- **Industry Cards**: Background fill with icon scale
- **CTA Buttons**: Pulse animation and shadow effects

## Performance Considerations

- **Session Storage**: Loader only shows once per session
- **Debounced Scroll**: Optimized scroll event handling
- **Intersection Observer**: Efficient scroll-triggered animations
- **Component Lazy Loading**: Sections load as needed
- **Optimized Particles**: Limited particle count for performance

## Customization

### Colors
Edit `tailwind.config.js` and `src/styles/globals.css` to modify the color scheme:

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      accent: {
        gold: '#your-gold-color',
        light: '#your-light-gold',
      }
    }
  }
}
```

### Animations
Modify animation timings and effects in component files:
- PageLoader: Adjust progress duration and curtain timing
- ScrollReveal: Modify delay and duration values
- Hover effects: Update CSS transitions

## Deployment

The site is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

## License

© 2024 Vision Defence Security. All rights reserved.
