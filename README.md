# Prime Pillar – React + TypeScript Website

A full multi-page real estate website built with **React 18 + TypeScript + Vite**.

## Colors (from official logo)
- Brown: `#3D2814` / Deep Brown: `#2A1A0A`
- Gold: `#C8930C` / Light Gold: `#E2AE3A`

## Tech Stack
- **React 18** with TypeScript
- **Vite** (fast dev server + build)
- **Lucide React** (icons, optional)
- Zero external UI libraries — all custom CSS

## Pages
| Page | Route (SPA state) |
|------|-------------------|
| Home | `home` |
| Properties (Buy/Rent/All) | `properties` |
| Property Detail | `detail` |
| Services | `services` |
| About Us | `about` |
| Newsletters | `newsletter` |
| Contact | `contact` |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Project Structure

```
src/
├── AppContext.tsx      # Global state + router (React Context)
├── App.tsx             # Root + page switcher
├── main.tsx            # Entry point
├── index.css           # Global styles + CSS variables
│
├── components/
│   ├── Nav.tsx         # Sticky navbar with dropdowns
│   ├── PropertyCard.tsx
│   ├── Footer.tsx
│   └── Toast.tsx
│
├── pages/
│   ├── Home.tsx        # Hero, search, featured, services, etc.
│   ├── Properties.tsx  # Full listing + sidebar filters
│   ├── Detail.tsx      # Property detail + enquiry form
│   ├── Services.tsx    # All 6 services with alternating layout
│   ├── About.tsx       # Team, values, partners
│   ├── Newsletter.tsx  # Market reports + subscribe
│   └── Contact.tsx     # Contact form + info
│
├── data/
│   └── properties.ts   # 18 sample properties with Unsplash images
│
├── types/
│   └── index.ts        # TypeScript interfaces
│
└── hooks/
    └── useReveal.ts    # Intersection Observer scroll animations
```

## Adding Real Properties

Edit `src/data/properties.ts` — each property follows the `Property` interface:

```ts
{
  id: number;
  title: string;
  location: string;           // must match LOCATIONS array
  type: 'Villa' | 'Apartment' | 'House' | 'Land' | 'Commercial';
  status: 'buy' | 'rent';
  price: number;              // Rs value
  beds: number;
  baths: number;
  area: number;               // m²
  amenities: string[];        // from AMENITIES_LIST
  desc: string;
  img: string;                // card thumbnail (~700px wide)
  imgFull: string;            // detail hero (~1600px wide)
  ref: string;                // e.g. 'PP-019'
  year: number;
  featured?: boolean;         // show on homepage
  tag?: string;               // e.g. 'Coming Soon'
}
```

## Connecting to WordPress / RealHomes

When you're ready to move to the WordPress + RealHomes theme:
1. Use the WordPress REST API (`/wp-json/wp/v2/`) or the RealHomes plugin API to fetch live properties
2. Replace the static `PROPERTIES` array in `src/data/properties.ts` with API calls
3. The filter/search logic in `Properties.tsx` can be adapted to pass query params to the API

## Deployment

The built output is in `dist/` — a static site that can be deployed to:
- **Netlify**: drag & drop `dist/` folder
- **Vercel**: `vercel --prod`
- **cPanel**: upload `dist/` contents to `public_html/`
- **GitHub Pages**: push `dist/` to `gh-pages` branch

## Customisation

All colours are CSS variables in `src/index.css` — change once, applies everywhere:
```css
:root {
  --brown:  #3D2814;
  --gold:   #C8930C;
  ...
}
```
