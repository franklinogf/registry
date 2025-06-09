# Custom Registry

A custom component registry built with [shadcn/ui](https://ui.shadcn.com/) that provides reusable, accessible React components for Next.js applications.

## 🚀 Features

- **Custom Input Field Component**: A comprehensive input field with built-in validation, error handling, and accessibility features
- **Modular Architecture**: Components are built with a modular approach for maximum reusability
- **Type-Safe**: Built with TypeScript for better developer experience
- **Accessible**: Components follow accessibility best practices
- **Dark Mode Support**: Built-in dark mode support with proper color schemes
- **Shadcn Registry Compatible**: Follows the shadcn registry schema for easy distribution

## 📦 Components

### Input Field

A feature-rich input field component that includes:

- **Label Support**: Optional labels with required field indicators
- **Error Handling**: Built-in error display with customizable positioning
- **Validation States**: Visual feedback for error states
- **Accessibility**: Proper ARIA attributes and keyboard navigation
- **Theming**: Dark/light mode support with consistent styling

#### Features:
- Required field indicators with asterisk icon
- Error messages with customizable positioning (top/bottom)
- Disabled state styling
- Custom className support for both container and input
- Type-safe props with TypeScript

#### Sub-components:
- `FieldContainer`: Layout wrapper with consistent spacing
- `FieldLabel`: Accessible label with required field indicators
- `FieldError`: Error message display with consistent styling
- `RequiredFieldIcon`: Visual indicator for required fields

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.1 with React 19
- **Styling**: Tailwind CSS 4.x
- **Icons**: Lucide React
- **UI Primitives**: Radix UI
- **Type Safety**: TypeScript 5.x
- **Package Manager**: pnpm
- **Build Tool**: Turbopack (dev) / Next.js (production)

## 📋 Prerequisites

- Node.js 18.x or later
- pnpm (recommended) or npm

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd registry-nextjs
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the component showcase.

## 🔧 Using Components from this Registry

### Installing Components

You can install components from this registry using the shadcn CLI:

```bash
npx shadcn@latest add https://your-registry-url.com/r/input-field
```

### Manual Installation

1. Copy the component files from the `registry/new-york/` directory
2. Install the required dependencies:
   ```bash
   pnpm add @radix-ui/react-label @radix-ui/react-slot lucide-react
   ```

### Usage Example

```tsx
import { InputField } from "@/components/ui/input-field";

export function ContactForm() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  return (
    <form>
      <InputField
        label="Full Name"
        value={name}
        onChange={setName}
        error={error}
        required
        placeholder="Enter your full name"
      />
    </form>
  );
}
```

## 📁 Project Structure

```
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage with component showcase
├── components/            # Shared components
│   └── ui/               # Base UI components
├── lib/                  # Utility functions
├── public/               # Static assets
│   └── r/               # Built registry files
├── registry/             # Source registry components
│   └── new-york/        # New York theme variant
│       ├── components/   # Shared component utilities
│       ├── inputs/       # Input components
│       ├── lib/         # Utility functions
│       └── ui/          # Base UI components
├── components.json       # shadcn configuration
├── registry.json        # Registry schema definition
└── package.json         # Project dependencies
```

## 🎨 Customization

### Theming

Components support both light and dark themes through Tailwind CSS classes. Error states automatically adapt to the current theme:

- Light theme: Red 600 for errors
- Dark theme: Red 400 for errors

### Styling

All components accept `className` props for custom styling. The input field component also supports `fieldClassName` for styling just the input element.

## 🧪 Development

### Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm registry:build` - Build registry components

### Building Registry Components

To build the registry components for distribution:

```bash
pnpm registry:build
```

This will generate the component files in the `public/r/` directory that can be consumed by the shadcn CLI.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-component`
3. Make your changes and add tests
4. Commit your changes: `git commit -m 'Add new component'`
5. Push to the branch: `git push origin feature/new-component`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the amazing component system and registry concept
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide](https://lucide.dev/) for beautiful icons
