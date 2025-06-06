# App Module

This module contains the core application components, hooks, and context providers.

## Structure

```
modules/app/
├── components/     # UI Components for the app module
│   └── Header.jsx  # Main navigation header
├── hooks/          # Custom hooks for the app module
│   └── useThemeMode.js  # Theme mode management hook
├── context/        # React context providers
│   └── ColorModeContext.jsx  # Color mode context
├── styles/         # Module-specific styles
└── index.js        # Module exports
```

## Usage

```jsx
import { Header, useThemeMode, ColorModeProvider } from './modules/app';
```

## Components

### Header
Main navigation component with logo, menu items, and theme toggle.

### useThemeMode Hook
Provides smart theme mode utilities:
- `isDark` / `isLight` - boolean flags
- `getByMode(lightValue, darkValue)` - conditional value helper
- `toggleColorMode` - theme switcher

### ColorModeProvider
Context provider for theme mode management across the application.
