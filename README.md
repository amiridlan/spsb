# Corporate Landing Site

A modern, responsive corporate landing site built with Vue 3, TailwindCSS, and GSAP animations.

## Features

- 🎨 Modern UI with 60-30-10 color rule
- 📱 Fully responsive design
- ✨ GSAP scroll animations
- 🎯 Smooth navigation
- 📋 Interactive service cards with dropdowns
- 📧 Contact form with validation
- ⚡ Fast loading with Vite

## Color Palette

- Primary (60%): `#2C3E50` - Dark blue-gray
- Secondary (30%): `#1F8A70` - Teal green
- Accent (10%): `#FFDE00` - Yellow

## Tech Stack

- Vue 3
- Vite
- TailwindCSS v3
- GSAP (GreenSock Animation Platform)
- PostCSS

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
corporate-landing/
├── src/
│   ├── components/
│   │   ├── LoadingSpinner.vue
│   │   ├── Header.vue
│   │   ├── HeroSection.vue
│   │   ├── ServicesSection.vue
│   │   ├── AboutSection.vue
│   │   ├── ContactSection.vue
│   │   └── Footer.vue
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Sections

1. **Hero Section**: Eye-catching landing with CTA buttons and statistics
2. **Services Section**: Three main services with expandable details
   - Event Spaces
   - Buildings
   - Facility Management
3. **About Us Section**: Company information and core values
4. **Contact Section**: Contact form and business information

## Customization

### Changing Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: '#2C3E50',
  secondary: '#1F8A70',
  accent: '#FFDE00',
}
```

### Modifying Company Info

Update the following files:

- `src/components/Header.vue` - Logo and navigation
- `src/components/Footer.vue` - Address and social links
- `src/components/ContactSection.vue` - Contact details
- `index.html` - Site title and meta tags

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
