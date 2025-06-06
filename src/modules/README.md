# Modules Architecture

This project uses a modular architecture where each feature/domain is organized into its own module. Each module can contain its own components, hooks, context, styles, and utilities.

## Module Structure

Each module follows this structure:
```
modules/[module-name]/
├── components/     # UI Components specific to this module
├── hooks/          # Custom hooks for this module
├── context/        # React context providers
├── styles/         # Module-specific styles
├── utils/          # Utility functions
├── types/          # TypeScript types (if using TS)
├── index.js        # Module exports
└── README.md       # Module documentation
```

## Current Modules

### App Module (`/modules/app/`)
✅ **Completed** - Core application components and utilities including:
- Header component with navigation and theme toggle
- Theme mode management hook (`useThemeMode`)
- Color mode context provider
- Smart theme conditional helpers

## Adding New Modules

To add a new module, see [MODULE_TEMPLATE.md](./MODULE_TEMPLATE.md) for detailed instructions.

Quick steps:
1. Create the module directory: `src/modules/[module-name]/`
2. Add the standard folders: `components/`, `hooks/`, `context/`, `styles/`
3. Create an `index.js` file to export the module's public API
4. Add a `README.md` to document the module

## Benefits

- **Scalability**: Easy to add new features without cluttering
- **Maintainability**: Related code is grouped together
- **Reusability**: Modules can be easily moved or reused
- **Clear Dependencies**: Module boundaries make dependencies explicit
- **Team Collaboration**: Different teams can work on different modules
