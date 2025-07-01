# MakeMuseAI

A React + TypeScript + Vite application with comprehensive Node.js integration.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
This starts the Vite development server with hot module replacement.

### Building for Production
```bash
npm run build
```
This creates an optimized production build in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```
This serves the production build locally for testing.

## 🧪 Testing

### Run Tests
```bash
npm test
```
Runs Vitest in watch mode.

### Run Tests with UI
```bash
npm run test:ui
```
Opens the Vitest UI for interactive testing.

## 🔍 Code Quality

### Linting
```bash
npm run lint
```
Runs ESLint to check code quality.

### Fix Linting Issues
```bash
npm run lint:fix
```
Automatically fixes ESLint issues where possible.

### Type Checking
```bash
npm run type-check
```
Runs TypeScript compiler to check for type errors.

## 📁 Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── assets/        # Static assets
│   ├── test/          # Test setup and utilities
│   ├── App.tsx        # Main App component
│   ├── main.tsx       # Application entry point
│   └── ...
├── public/            # Public static files
├── dist/              # Production build output
├── package.json       # Dependencies and scripts
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript configuration
└── .eslintrc.cjs      # ESLint configuration
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run tests |
| `npm run test:ui` | Run tests with UI |
| `npm run lint` | Check code quality |
| `npm run lint:fix` | Fix code quality issues |
| `npm run type-check` | Check TypeScript types |

## 🔧 Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Vitest** - Testing framework
- **ESLint** - Code linting
- **React Testing Library** - Component testing

## 📦 Node.js Integration Features

This project includes:

- ✅ **Package Management** - npm with package-lock.json
- ✅ **TypeScript Support** - Full type checking and IntelliSense
- ✅ **Hot Module Replacement** - Instant updates during development
- ✅ **Testing Framework** - Vitest with React Testing Library
- ✅ **Code Quality** - ESLint with TypeScript and React rules
- ✅ **Build Optimization** - Vite for fast builds
- ✅ **Development Server** - Fast refresh and error overlay

## 🚀 Deployment

The built application can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static file server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm test`
5. Check code quality: `npm run lint`
6. Submit a pull request 