# Module Template

Use this template when creating new modules in the application.

## Creating a New Module

1. **Create the module directory structure:**
```bash
mkdir -p src/modules/[module-name]/{components,hooks,context,styles,utils}
```

2. **Create the module index file** (`src/modules/[module-name]/index.js`):
```javascript
// [Module Name] Module Exports
export { default as [ComponentName] } from './components/[ComponentName]';
export { [hookName] } from './hooks/[hookName]';
export { [ContextProvider], [useContext] } from './context/[ContextName]';
```

3. **Create module README** (`src/modules/[module-name]/README.md`):
```markdown
# [Module Name] Module

Brief description of what this module does.

## Components
- **[ComponentName]**: Description

## Hooks
- **[hookName]**: Description

## Context
- **[ContextProvider]**: Description

## Usage
\`\`\`jsx
import { [ComponentName], [hookName] } from './modules/[module-name]';
\`\`\`
```

## Example Module Structure

```
modules/auth/
├── components/
│   ├── LoginForm.jsx
│   ├── SignupForm.jsx
│   └── UserProfile.jsx
├── hooks/
│   ├── useAuth.js
│   └── useLogin.js
├── context/
│   └── AuthContext.jsx
├── styles/
│   └── auth.css
├── utils/
│   └── authHelpers.js
├── index.js
└── README.md
```

## Import Pattern

```javascript
// Good: Import from module index
import { LoginForm, useAuth } from './modules/auth';

// Avoid: Direct imports bypass module encapsulation
import LoginForm from './modules/auth/components/LoginForm';
```
