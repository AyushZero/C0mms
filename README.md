# C0MMS

A modern Next.js application built with TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with custom theme
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) with New York style
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Geist](https://vercel.com/font) (Sans & Mono)

## 📦 Dependencies

### Core Dependencies
- `next` - React framework for production
- `react` & `react-dom` - React library
- `typescript` - Type safety
- `tailwindcss` - Utility-first CSS framework
- `lucide-react` - Beautiful icons

### UI Components
- `@radix-ui/react-slot` - Component composition
- `class-variance-authority` - CSS-in-JS variants
- `clsx` & `tailwind-merge` - Conditional styling utilities

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd c0mms
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   └── ui/
│       └── button.tsx       # shadcn/ui Button component
└── lib/
    └── utils.ts             # Utility functions (cn helper)

public/
├── *.svg                    # Static assets and icons
└── ...

Configuration files:
├── components.json          # shadcn/ui configuration
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration (implied)
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## 🎨 UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) components with the **New York** style variant. Components are:

- **Accessible** - Built on Radix UI primitives
- **Customizable** - Full control over styling
- **Copy & Paste** - No package dependency
- **TypeScript** - Full type safety

### Adding New Components

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add dialog
```

## 🎭 Styling

### Tailwind CSS Configuration
- **Version**: Tailwind CSS 4
- **Base Color**: Neutral
- **CSS Variables**: Enabled for theming
- **Custom Variants**: Dark mode support
- **Animations**: Enhanced with `tw-animate-css`

### Theme Colors
The project includes a comprehensive color system with light/dark mode support:
- Primary, Secondary, Accent colors
- Muted, Destructive states  
- Card, Popover, Border utilities
- Chart colors for data visualization
- Sidebar component colors

### Custom Utilities
- `cn()` function for conditional class merging
- CSS custom properties for dynamic theming
- Responsive design utilities

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality
- **ESLint** - Configured with Next.js and TypeScript rules
- **TypeScript** - Strict mode enabled
- **Prettier** - (Add if needed for formatting)

## 📱 Features

- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Dark Mode** - Automatic theme switching
- ✅ **TypeScript** - Full type safety
- ✅ **Modern CSS** - Tailwind CSS 4 with custom properties
- ✅ **Component Library** - shadcn/ui integration
- ✅ **Performance** - Next.js App Router optimizations
- ✅ **Accessibility** - WCAG compliant components

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Configure build command as `npm run build`
- **Railway**: Set up with Node.js environment
- **Docker**: Create Dockerfile for containerized deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

Built with ❤️ using Next.js and modern web technologies.