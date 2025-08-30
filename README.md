# Frontend Project

This is a Next.js project with comprehensive development workflow setup.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🛠️ Development Workflow

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Run ESLint and automatically fix issues
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is properly formatted

### Code Quality Tools

- **ESLint**: Code linting with custom rules for better code quality
- **Prettier**: Code formatting for consistency
- **TypeScript**: Strict type checking
- **Husky**: Git hooks for pre-commit and pre-push checks
- **lint-staged**: Run linters only on staged files

### Git Hooks

The project uses Husky to run quality checks automatically:

- **Pre-commit**: Runs linting and formatting on staged files
- **Pre-push**: Runs type checking, linting, and format checking

### CI/CD Pipeline

GitHub Actions workflow runs on every push and pull request:

1. **Quality Check**: Type checking, linting, and format checking
2. **Build**: Ensures the application builds successfully
3. **Security**: Runs security audits on dependencies

## 📁 Project Structure

```
frontend/
├── app/                    # Next.js app directory
│   ├── (landingPage)/     # Landing page components
│   ├── about-us/          # About us page
│   ├── ai-tools/          # AI tools pages
│   ├── blogs/             # Blog pages
│   └── ...
├── components/            # Shared components
├── lib/                   # Utility functions
├── public/                # Static assets
└── ...
```

## 🤝 Contributing

1. Create a feature branch from `main` or `develop`
2. Make your changes
3. Run quality checks: `npm run lint && npm run type-check && npm run format:check`
4. Commit your changes (hooks will run automatically)
5. Push your branch and create a pull request

### Pull Request Guidelines

- Use the provided PR template
- Ensure all CI checks pass
- Add tests if applicable
- Update documentation if needed

## 📝 Code Style

- Use TypeScript for all new code
- Follow ESLint rules
- Use Prettier for formatting
- Use meaningful commit messages
- Write self-documenting code

## 🔧 VS Code Setup

Install the recommended extensions for the best development experience:

- Prettier - Code formatter
- ESLint - Code linting
- Tailwind CSS IntelliSense - Tailwind CSS support
- TypeScript and JavaScript Language Features
- GitLens - Git integration

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
