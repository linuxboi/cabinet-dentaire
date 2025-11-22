# Centre Dentaire Mandarona - Website

Modern, elegant dental clinic website inspired by Dentissimo template with fuchsia pink branding.

## 🎨 Design Features

- **Color Scheme**: Fuchsia pink (#c026d3), white, and gray
- **Typography**: Poppins font family
- **Style**: Modern, minimalist, premium aesthetic
- **Responsive**: Mobile-first design, fully responsive
- **Animations**: Smooth transitions with Framer Motion

## 📁 Project Structure

```
centre-dentaire-mandarona/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Footer with contact info
│   │   ├── CTA.jsx             # Call-to-action component
│   │   ├── WhatsAppButton.jsx  # Floating WhatsApp button
│   │   └── Stats.jsx           # Statistics section
│   ├── pages/
│   │   ├── Home.jsx            # Homepage
│   │   ├── About.jsx           # About page
│   │   ├── Services.jsx        # Services page
│   │   ├── Team.jsx            # Team page
│   │   ├── Gallery.jsx         # Before/After gallery
│   │   └── Contact.jsx         # Contact page
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Create a new Vite + React project:
```bash
npm create vite@latest centre-dentaire-mandarona -- --template react
cd centre-dentaire-mandarona
```

2. Install dependencies:
```bash
npm install react-router-dom framer-motion react-icons
```

3. Replace the files:
   - Copy all files from this package to the appropriate folders:
     - Components → `src/components/`
     - Pages → `src/pages/`
     - Root files (`App.jsx`, `main.jsx`, `index.css`) → `src/`

4. Start the development server:
```bash
npm run dev
```

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.23.0",
    "framer-motion": "^11.2.0",
    "react-icons": "^5.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.0",
    "vite": "^5.2.0",
    "tailwindcss": "^3.4.0"
  }
}
```

## 🎨 Color Palette

### Primary Colors (Fuchsia Pink)
- `primary-50`: #fdf4ff
- `primary-100`: #fae8ff
- `primary-200`: #f5d0fe
- `primary-300`: #f0abfc
- `primary-400`: #e879f9
- `primary-500`: #d946ef
- `primary-600`: #c026d3 (Main brand color)
- `primary-700`: #a21caf
- `primary-800`: #86198f
- `primary-900`: #701a75

### Gray Scale
- `gray-50` to `gray-900`

## 📝 Customization

### Update Contact Information

Replace placeholders in the following files:
- `Header.jsx`: Phone number link
- `Footer.jsx`: Address, phone, email, hours
- `Contact.jsx`: Contact form and map
- `WhatsAppButton.jsx`: WhatsApp number

Search for: `+212XXXXXXXXX` and `contact@mandarona.ma`

### Add Logo

Replace the tooth icon in:
- `Header.jsx`: Logo section
- `Footer.jsx`: Footer logo

### Add Images

Replace gradient placeholders with real images:
- Homepage hero section
- Service images
- Team photos
- Before/After gallery
- About page images

## 🌐 Pages Overview

### 1. Home (`/`)
- Hero section with call-to-action
- Priority dental health banner
- Welcome section with images
- Why choose us section
- Services preview
- Statistics
- Testimonials

### 2. About (`/a-propos`)
- Mission statement
- Core values
- Our approach
- Statistics section

### 3. Services (`/services`)
- 6 main services:
  - Orthodontie
  - Soins dentaires & Prévention
  - Esthétique dentaire
  - Implantologie
  - Dentisterie pédiatrique
  - Urgences dentaires

### 4. Team (`/equipe`)
- Dr Awatif Zaki Ziraoui
- Dr Nawar
- Support team information

### 5. Gallery (`/avant-apres`)
- Before/After slider
- Case studies
- Patient testimonials

### 6. Contact (`/contact`)
- Contact form
- Office information
- Google Maps integration
- Opening hours

## 🔧 Features

- ✅ Responsive design
- ✅ Smooth animations
- ✅ Floating WhatsApp button
- ✅ Modern UI/UX
- ✅ SEO-ready structure
- ✅ Fast loading times
- ✅ Accessible design

## 📱 Mobile Optimization

- Touch-friendly interface
- Mobile menu with slide-in animation
- Optimized images and fonts
- Fast mobile performance

## 🎯 SEO Considerations

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images (to be added)
- Meta descriptions (to be added)
- Schema.org markup (to be implemented)

## 🚀 Deployment

Build for production:
```bash
npm run build
```

The `dist` folder will contain the optimized production build.

### Deployment Options
- Vercel
- Netlify
- GitHub Pages
- Traditional hosting (upload `dist` folder)

## 📞 Support

For questions or customization requests, contact your web developer.

## 📄 License

© Centre Dentaire Mandarona - All rights reserved
