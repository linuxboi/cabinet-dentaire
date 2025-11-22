# 🚀 Quick Start Guide

Get your website up and running in 5 minutes!

## Step 1: Create Project (1 minute)

```bash
npm create vite@latest centre-dentaire-mandarona -- --template react
cd centre-dentaire-mandarona
```

## Step 2: Install Dependencies (2 minutes)

```bash
npm install
npm install react-router-dom framer-motion react-icons
```

## Step 3: Create Folders

```bash
mkdir src/components
mkdir src/pages
```

## Step 4: Copy Files (1 minute)

Copy files to these locations:

### In `src/components/`:
- Header.jsx
- Footer.jsx
- CTA.jsx
- WhatsAppButton.jsx
- Stats.jsx

### In `src/pages/`:
- Home.jsx
- About.jsx
- Services.jsx
- Team.jsx
- Gallery.jsx
- Contact.jsx

### In `src/`:
- App.jsx (replace existing)
- main.jsx (replace existing)
- index.css (replace existing)

## Step 5: Start Development (1 minute)

```bash
npm run dev
```

Open browser to: `http://localhost:5173`

## 🎉 Done!

Your website is now running!

## 📝 Next Steps

1. **Update contact info:**
   - Search for `+212XXXXXXXXX` and replace
   - Search for `contact@mandarona.ma` and replace

2. **Add images:**
   - Place images in `public/images/` folder
   - Replace gradient placeholders in components

3. **Customize content:**
   - Edit text in each page component
   - Update team member information
   - Adjust services descriptions

## 📚 Documentation

- **README.md** - Complete documentation
- **SETUP_GUIDE.md** - Detailed setup instructions
- **CHANGES.md** - List of all improvements
- **package.json** - Dependencies list

## 🆘 Need Help?

Common issues:
- **Port in use?** Try: `npm run dev -- --port 3000`
- **Module errors?** Run: `rm -rf node_modules && npm install`
- **Files not found?** Check folder structure matches above

## 🌐 Deploy (Optional)

### Quick Deploy with Vercel:

```bash
npm run build
npx vercel
```

### Quick Deploy with Netlify:

```bash
npm run build
npx netlify deploy
```

---

**Important Files:**
- `src/components/Header.jsx` - Update phone number
- `src/components/Footer.jsx` - Update address, phone, email
- `src/pages/Contact.jsx` - Update contact form destination
- `src/components/WhatsAppButton.jsx` - Update WhatsApp number

**Visual Customization:**
- `src/index.css` - Color scheme (look for `--color-primary-600`)
- All components use Tailwind classes for easy styling

---

💡 **Pro Tip:** Start by updating contact information first, then add images, then customize content!

🎨 **Color Scheme:** The website uses fuchsia pink (#c026d3) as the primary color. You can change this in `index.css` by updating the `--color-primary-*` variables.

📱 **Mobile-First:** The design looks great on all devices automatically!

⚡ **Fast:** Optimized for speed with Vite and React.

🔧 **Customizable:** Easy to modify with Tailwind CSS utility classes.

---

**Questions?** Check the full documentation in README.md or SETUP_GUIDE.md
