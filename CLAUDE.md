# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 + TypeScript corporate landing site for SPSB (a company providing event spaces, building management, and facility management services). The site uses Vite for development/build, TailwindCSS for styling, and CSS animations (NOT GSAP despite what README says) for scroll effects.

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server (runs on http://localhost:3001 with auto-open)
npm run dev

# Type check without emitting files
npm run type-check

# Build for production (includes type checking)
npm run build

# Preview production build
npm run preview
```

## Architecture

### Routing Structure

The app uses Vue Router with the following route hierarchy:

- `/` - Home page (loads `src/views/Home.vue` eagerly, which composes HeroSection + ServicesSection)
- `/services/event-spaces` - Event Spaces detail page (lazy loaded)
- `/services/buildings` - Buildings detail page (lazy loaded)
- `/services/facility-management` - Facility Management detail page (lazy loaded)
- `/company-profile` - Company profile page (lazy loaded)
- `/contact` - Contact page (lazy loaded)

**Router behavior:**
- Custom scrollBehavior: scrolls to top on route change, smooth scrolls to hash anchors with 80px offset
- Uses `createWebHistory()` for clean URLs

### Component Architecture

**Layout components (used in App.vue):**
- `Header.vue` - Global navigation header
- `Footer.vue` - Global footer with company info

**Page composition pattern:**
- Home page (`views/Home.vue`) is minimal - just composes HeroSection + ServicesSection components
- Service detail pages (`views/services/*.vue`) are self-contained with their own sections and data
- Other pages (`Contact.vue`, `CompanyProfile.vue`) are standalone views

### Animation System

**Important:** Despite README mentioning GSAP, the project uses **CSS animations only**. There is NO GSAP import or usage in the codebase.

**Animation approach:**
- Intersection Observer composable: `src/composables/useScrollAnimation.ts`
- Elements with `animate-on-scroll` class start hidden (opacity: 0)
- When scrolled into view, `.animated` class is added, triggering CSS animations
- Various animation utilities in `src/style.css`: `fade-in`, `fade-in-up`, `fade-in-left`, `scale-in`, etc.
- Delay classes (`delay-100` through `delay-800`) for staggered animations

### Styling System

**Color palette (defined in `tailwind.config.js`):**
- `primary`: #2C3E50 (dark blue-gray) - 60% usage
- `secondary`: #1F8A70 (teal green) - 30% usage
- `accent`: #FFDE00 (yellow) - 10% usage

**Custom Tailwind utilities (in `src/style.css`):**
- `.container-custom` - Max-width container with responsive padding
- `.btn-primary` - Primary button style with secondary background
- `.btn-accent` - Accent button style with yellow background

**Font:** Inter (loaded from Google Fonts)

### TypeScript Types

All shared types are in `src/types/index.ts`:
- `NavItem` - Navigation item with optional children
- `Service` - Service card data structure
- `KeyPoint` - Key point with title/description
- `SocialLink` - Social media link
- `ContactFormData` - Contact form fields

### Build Configuration

**Vite config highlights:**
- Dev server on port 3001 with auto-open
- Manual chunks: vendor (vue) and gsap (future-proofing, not currently used)
- Output dir: `dist`
- Sourcemaps disabled in production

**TypeScript config:**
- Strict mode enabled
- ES2020 target
- Bundler module resolution
- Unused locals/parameters checking enabled

## Key Patterns

1. **Service pages structure:** All service detail pages follow same pattern - hero section with icon, service categories grid, property types/features section, CTA section

2. **Icon pattern:** Service pages use inline SVG icons defined as functions in component setup, rendered with `<component :is="icon" />`

3. **Scroll animations:** Add `animate-on-scroll` class to any element you want animated on scroll. The useScrollAnimation composable must be called in the component's setup.

4. **Responsive design:** Mobile-first approach with Tailwind breakpoints (sm, md, lg)

## Important Notes

- LoadingSpinner component exists but is commented out in App.vue
- The project includes GSAP in manual chunks config but doesn't actually use GSAP library
- Global error handler is configured in `src/main.ts`
- Custom scrollbar styling is applied globally
