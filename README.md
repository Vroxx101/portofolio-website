# Fathir - Web Developer Portfolio

A modern, interactive full-stack developer portfolio built with Next.js, React, and TypeScript. This portfolio showcases my skills and projects with a visually stunning interface featuring 3D elements, animations, and an elegant dark/light theme.

## 🚀 Features

- **Modern UI/UX Design**: Sleek, contemporary design with smooth animations
- **3D Background**: Interactive 3D background using Three.js
- **Dark/Light Theme**: Toggle between dark and light modes
- **Fully Responsive**: Optimized for all device sizes
- **Performance Optimized**: Fast loading times and optimized assets
- **Animations**: Smooth scroll animations and micro-interactions
- **Dynamic Components**: Modular, reusable component architecture
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.x
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom animations
- **3D Graphics**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **State Management**: React Hooks

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main homepage
├── components/             # Reusable UI components
│   ├── header.tsx
│   ├── hero.tsx
│   ├── about.tsx
│   ├── projects.tsx
│   ├── contact.tsx
│   ├── footer.tsx
│   ├── three-d-background.tsx
│   └── ...
├── public/                 # Static assets
└── styles/                 # Additional style files
```

## 🧩 Sections

- **Hero**: Eye-catching introduction with animated elements
- **About**: Personal information and skills showcase
- **Education**: Academic background and certifications
- **Services**: Professional services offered
- **Projects**: Featured projects with descriptions and links
- **Achievements**: Professional accomplishments
- **Contact**: Contact form and social media links

## 🎨 Color Scheme

- **Primary**: `#6C63FF` (Purple)
- **Secondary**: `#FF6B6B` (Red)
- **Accent**: `#4ECDC4` (Teal)
- **Background**: `#0A0A0F` (Dark) / `#F8F9FA` (Light)
- **Foreground**: `#F4F4F4` (Dark) / `#121212` (Light)

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/fathir-portfolio/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the portfolio in action.

## 🧪 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production-ready application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues

## 🚀 Deployment

### Vercel
The easiest way to deploy this portfolio is to use [Vercel](https://vercel.com), the creators of Next.js.

1. Push your code to a Git repository
2. Import your project into Vercel
3. Choose the Next.js preset
4. Deploy!

### Docker
To build and run with Docker:

```bash
docker build -t fathir-portfolio .
docker run -p 3000:3000 fathir-portfolio
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## 🐛 Issues

If you find any bugs or have suggestions for improvements, please open an issue in the repository.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Author

This portfolio was created by **Fathir**, a passionate Full-stack Developer dedicated to creating beautiful, responsive and interactive websites. Connect with me on social media:

- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]
- Email: [Your Email]

---

Made with 💜 using Next.js, TypeScript, and Tailwind CSS.
