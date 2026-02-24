# Modern Portfolio Website

A professional, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion
- **Dark/Light Theme**: Fully responsive theme toggle with system preference detection
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Animations**: Entrance animations and hover effects using Framer Motion
- **SEO Optimized**: Proper metadata, Open Graph tags, and semantic HTML
- **Contact Form**: Functional contact form with validation and API route
- **Clean Components**: Well-organized, reusable components
- **Fast Performance**: Optimized for speed and Core Web Vitals

## 🎨 Sections

1. **Hero Section** - Professional introduction with animated profile display
2. **Navbar** - Sticky navigation with smooth scrolling and theme toggle
3. **Projects** - Grid layout showcasing work with tech stack badges
4. **About** - Developer introduction, skills, and experience timeline
5. **Contact** - Functional contact form with validation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: React Icons
- **Form Validation**: Zod
- **Email Handling**: Nodemailer (API route)
- **Theme**: next-themes

## 🚀 Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open in browser**:
Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   └── ThemeProvider.tsx
└── public/
    └── profile.svg
```

## 🎯 Customization

### Update Personal Information
- Edit the name and title in `src/components/Hero.tsx`
- Update skills in the `skills` array
- Modify projects in `src/components/Projects.tsx`
- Update experience in `src/components/About.tsx`
- Change contact information in `src/components/Contact.tsx`

### Theme Colors
Modify the gradient colors in:
- `src/components/Navbar.tsx` (logo gradient)
- `src/components/Hero.tsx` (profile background)
- `src/components/Projects.tsx` (project cards)

### Social Links
Update social media links in `src/components/Navbar.tsx`:
- GitHub URL
- LinkedIn URL
- Email address

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🎨 Animations

All animations are powered by Framer Motion:
- Page entrance animations
- Hover effects on interactive elements
- Smooth scrolling between sections
- Staggered animations for content loading

## 📧 Contact Form

The contact form includes:
- Client-side validation with Zod
- Server-side validation in API route
- Loading states and success/error feedback
- Accessible form elements

To enable actual email sending, configure nodemailer in the API route with your email service credentials.

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

Built with ❤️ using modern web technologies
