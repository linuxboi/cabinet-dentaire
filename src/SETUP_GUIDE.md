# Setup Guide - Centre Dentaire Mandarona

Step-by-step guide to set up your website.

## 📋 Prerequisites Checklist

Before starting, make sure you have:
- [ ] Node.js installed (v16 or higher) - [Download](https://nodejs.org/)
- [ ] A code editor (VS Code recommended) - [Download](https://code.visualstudio.com/)
- [ ] Basic familiarity with terminal/command line
- [ ] Git installed (optional) - [Download](https://git-scm.com/)

## 🚀 Step-by-Step Installation

### Step 1: Create New Vite Project

Open your terminal and run:

```bash
npm create vite@latest centre-dentaire-mandarona -- --template react
```

When prompted:
- Select "React"
- Select "JavaScript"

### Step 2: Navigate to Project

```bash
cd centre-dentaire-mandarona
```

### Step 3: Install Dependencies

```bash
npm install
npm install react-router-dom framer-motion react-icons
```

### Step 4: Project Structure Setup

Create the following folder structure:

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── CTA.jsx
│   ├── WhatsAppButton.jsx
│   └── Stats.jsx
└── pages/
    ├── Home.jsx
    ├── About.jsx
    ├── Services.jsx
    ├── Team.jsx
    ├── Gallery.jsx
    └── Contact.jsx
```

Create folders:
```bash
mkdir src/components
mkdir src/pages
```

### Step 5: Copy Files

Copy the provided files to their locations:

**Components** (place in `src/components/`):
- Header.jsx
- Footer.jsx
- CTA.jsx
- WhatsAppButton.jsx
- Stats.jsx

**Pages** (place in `src/pages/`):
- Home.jsx
- About.jsx
- Services.jsx
- Team.jsx
- Gallery.jsx
- Contact.jsx

**Root files** (place in `src/`):
- App.jsx
- main.jsx
- index.css

### Step 6: Start Development Server

```bash
npm run dev
```

Your site should now be running at: `http://localhost:5173`

## 🎨 Customization Steps

### 1. Update Contact Information

**Files to update:**
- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`
- `src/components/WhatsAppButton.jsx`

**Search and replace:**
- `+212XXXXXXXXX` → Your actual phone number
- `contact@mandarona.ma` → Your actual email
- Update address in Footer and Contact pages

### 2. Add Your Logo

**Option A: Use an image file**
1. Place your logo in `public/` folder (e.g., `public/logo.png`)
2. In `Header.jsx`, replace the FaTooth icon section with:
```jsx
<img src="/logo.png" alt="Mandarona Logo" className="h-12" />
```

**Option B: Keep the tooth icon**
- The current tooth icon is already professional and works well

### 3. Add Real Images

Replace gradient placeholders with real images:

**Home page** (`src/pages/Home.jsx`):
- Hero section main image
- Welcome section images (4 images)

**Services page** (`src/pages/Services.jsx`):
- 6 service images

**Team page** (`src/pages/Team.jsx`):
- Dr. Zaki photo
- Dr. Nawar photo

**Gallery page** (`src/pages/Gallery.jsx`):
- Before/After case photos

**About page** (`src/pages/About.jsx`):
- Clinic interior photos

**Example of adding images:**
```jsx
// Replace this:
<div className="bg-gradient-to-br from-primary-200 to-primary-300">
  {/* ... */}
</div>

// With this:
<img 
  src="/images/your-image.jpg" 
  alt="Description" 
  className="w-full h-full object-cover"
/>
```

### 4. Update Business Hours

In `Footer.jsx` and `Contact.jsx`, update:
```jsx
Lun-Ven: 9h00 - 19h00
Samedi: 9h00 - 13h00
Dimanche: Fermé
```

### 5. Add Google Maps

In `Contact.jsx`, replace the placeholder with real Google Maps embed:

1. Go to [Google Maps](https://maps.google.com)
2. Search for your address
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the placeholder section

### 6. Connect Social Media

Update social media links in `Footer.jsx`:
```jsx
<a href="https://facebook.com/your-page" ...>
<a href="https://instagram.com/your-profile" ...>
```

### 7. Configure Contact Form

The contact form currently logs to console. To make it functional:

**Option A: Use a service (easiest)**
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Web3Forms](https://web3forms.com/)

**Option B: Backend integration**
- Connect to your own backend API

Example with Formspree:
```jsx
<form 
  action="https://formspree.io/f/your-form-id" 
  method="POST"
>
  {/* form fields */}
</form>
```

## 🏗️ Building for Production

### Create Production Build

```bash
npm run build
```

This creates an optimized `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Free)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Import your repository
5. Deploy!

### Option 2: Netlify (Free)

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Sign up with GitHub
4. Import your repository
5. Deploy!

### Option 3: Traditional Hosting

1. Build your project: `npm run build`
2. Upload the `dist/` folder to your hosting
3. Configure your server to serve the index.html

## 🔧 Common Issues & Solutions

### Issue: Module not found errors

**Solution:**
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Issue: Port already in use

**Solution:**
```bash
# On Windows
netstat -ano | findstr :5173
taskkill /PID [PID_NUMBER] /F

# On Mac/Linux
lsof -ti:5173 | xargs kill -9
```

### Issue: Images not loading

**Solution:**
- Place images in `public/` folder
- Reference with `/image.jpg` (starting with /)
- Or use `import` for images in `src/`

### Issue: Routing not working after deployment

**Solution:**
Add a `_redirects` file (Netlify) or configure vercel.json:
```
/*    /index.html   200
```

## 📞 Getting Help

- Check the README.md for detailed documentation
- Review React Router docs: https://reactrouter.com/
- Review Framer Motion docs: https://www.framer.com/motion/
- Review Tailwind CSS docs: https://tailwindcss.com/

## ✅ Post-Setup Checklist

After setup, verify:
- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Contact information is updated
- [ ] WhatsApp button has correct number
- [ ] Forms work (or are configured)
- [ ] Images are added
- [ ] Site is responsive on mobile
- [ ] Social media links work
- [ ] Google Maps shows correct location

## 🎉 You're Done!

Your website is now ready. Regular maintenance:
- Keep dependencies updated: `npm update`
- Add content regularly
- Monitor site performance
- Collect and respond to patient feedback

---

**Need custom development?** Contact your web developer for:
- Custom features
- Backend integration
- SEO optimization
- Performance tuning
- Content management system
