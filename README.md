# 🧄 Four Founders Garlic Company - Premium Export Website

A custom-designed, premium, earthy export-focused website for **Four Founders Garlic Company**, an Indian agricultural export brand supplying premium garlic to UAE markets.

## ✨ Features

- **Premium Earthy Design** - Custom theme with soil, garlic, and natural tones
- **Export-Focused Content** - Specifically designed for UAE B2B market
- **Modern Tech Stack** - React + TypeScript + Vite + Tailwind CSS + Shadcn/UI
- **Smooth Animations** - Framer Motion for subtle, professional animations
- **Mobile Responsive** - Mobile-first design approach
- **Form Validation** - Zod schema validation with React Hook Form
- **WhatsApp Integration** - Direct WhatsApp contact functionality
- **SEO Optimized** - Semantic HTML and proper structure

## 🛠️ Technology Stack

- **Frontend:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn/UI (custom-configured)
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form + Zod
- **Icons:** Lucide React

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components (Shadcn/UI)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── container.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── section-header.tsx
│   │   ├── textarea.tsx
│   │   └── whatsapp-button.tsx
│   └── sections/           # Page sections
│       ├── hero-section.tsx
│       ├── about-section.tsx
│       ├── products-section.tsx
│       ├── why-choose-us-section.tsx
│       ├── export-capabilities-section.tsx
│       ├── inquiry-form-section.tsx
│       └── footer-section.tsx
├── data/                   # Static data and content
│   └── index.ts
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
│   └── utils.ts
├── types/                  # TypeScript type definitions
│   └── index.ts
├── App.tsx                 # Main app component
├── main.tsx               # Entry point
└── index.css              # Global styles & theme
```

## 🎨 Design System

### Color Palette
- **Primary:** Rich natural green (`oklch(0.45 0.08 120)`)
- **Secondary:** Muted gold accent (`oklch(0.85 0.025 50)`)
- **Background:** Warm cream (`oklch(0.98 0.008 45)`)
- **Foreground:** Deep soil brown (`oklch(0.22 0.015 35)`)

### Typography
- **Headings:** Playfair Display (serif) for premium feel
- **Body:** System font stack for readability
- **Code:** JetBrains Mono

### Components
- **Cards:** Rounded corners with subtle shadows
- **Buttons:** Custom variants with hover states
- **Forms:** Comprehensive validation with error handling

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Start the development server**
   ```bash
   pnpm dev
   ```

3. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## 📄 Content & Data

All website content is derived from the Four Founders Garlic Company brand document and includes:

### Products
- **Fresh Garlic Bulbs** - Premium hand-sorted garlic
- **Garlic Powder** - Fine, preservative-free powder
- **Garlic Paste** - Ready-to-use fresh paste
- **Garlic Flakes** - Dehydrated aromatic flakes

### Export Capabilities
- Full container loads (FCL)
- Trial orders for new buyers
- Direct UAE port delivery
- Complete documentation support
- Phytosanitary certificates
- Moisture-proof packaging

### Certifications
- FSSAI Certified
- APEDA Registered
- Export documentation support
- Quality assurance processes

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `pnpm build`
   - Output Directory: `dist`
3. Deploy automatically on push to main

### Netlify
1. Connect repository to Netlify
2. Set build command: `pnpm build`
3. Set publish directory: `dist`

## 📞 Contact Integration

### WhatsApp Integration
- Floating WhatsApp button with custom messages
- Form submissions redirect to WhatsApp
- UAE phone number: `+971 50 123 4567` (placeholder)

### Email Contact
- Main contact: `the4founder@gmail.com`
- Inquiry form submissions (currently WhatsApp integration)

## 🎯 Key Sections

1. **Hero Section** - Premium brand introduction with dual CTAs
2. **About Section** - Four founders story and company values
3. **Products Section** - Comprehensive product showcase
4. **Why Choose Us** - USPs and certifications
5. **Export Capabilities** - UAE-focused export services
6. **Inquiry Form** - Comprehensive bulk order form
7. **Footer** - Contact information and trust indicators

## 🔧 Customization

### Adding New Products
1. Add product data to `src/data/index.ts`
2. Products automatically appear in relevant sections

### Updating Contact Information
1. Update WhatsApp number in `src/lib/utils.ts`
2. Update email and contact details in footer section

### Theme Customization
1. Modify CSS variables in `src/index.css`
2. Colors use OKLCH color space for better consistency

## 📱 Mobile Responsiveness

- Mobile-first design approach
- Responsive grid layouts
- Touch-friendly button sizes
- Optimized typography scales

## ⚡ Performance

- Vite for fast development and builds
- Component lazy loading where appropriate
- Optimized images and assets
- Minimal bundle size with tree shaking

## 🧪 Testing

Run ESLint for code quality:
```bash
pnpm lint
```

## 📈 Future Enhancements

- [ ] Add image gallery for products
- [ ] Implement backend for form submissions
- [ ] Add multi-language support (Arabic)
- [ ] Integrate with CMS for content management
- [ ] Add testimonials section
- [ ] Implement analytics tracking

## 📄 License

This project is built for Four Founders Garlic Company. All content and branding materials are proprietary to Four Founders Garlic Company.

---

**Built with ❤️ for premium Indian garlic exports to UAE markets**
