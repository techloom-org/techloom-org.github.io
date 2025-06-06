// Animation utility styles for enhanced About page components
export const animationStyles = {
  // Floating animation keyframes
  float: {
    '@keyframes float': {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-20px)' },
    },
  },
  
  // Pulse animation for background elements
  pulse: {
    '@keyframes pulse': {
      '0%, 100%': { transform: 'scale(1)', opacity: 0.5 },
      '50%': { transform: 'scale(1.1)', opacity: 0.8 },
    },
  },
  
  // Shimmer effect for buttons and cards
  shimmer: {
    '@keyframes shimmer': {
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(100%)' },
    },
  },
  
  // Fade in up animation for content
  fadeInUp: {
    '@keyframes fadeInUp': {
      '0%': { 
        opacity: 0,
        transform: 'translateY(30px)',
      },
      '100%': { 
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  },
  
  // Scale in animation for icons
  scaleIn: {
    '@keyframes scaleIn': {
      '0%': { 
        opacity: 0,
        transform: 'scale(0.5)',
      },
      '100%': { 
        opacity: 1,
        transform: 'scale(1)',
      },
    },
  },
  
  // Gradient shift animation
  gradientShift: {
    '@keyframes gradientShift': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' },
    },
  },
};

// Common transition configurations - optimized for performance
export const transitions = {
  smooth: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease', // Separate properties
  bounce: 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Reduced duration
  swift: 'transform 0.2s ease-out, opacity 0.15s ease', // Faster transitions
  slow: 'transform 0.4s ease-in-out, opacity 0.3s ease', // Still smooth but faster
  hover: 'transform 0.2s ease, box-shadow 0.25s ease, border-color 0.2s ease', // Card hover optimized
};

// Responsive breakpoint helpers
export const breakpoints = {
  xs: '(max-width: 599px)',
  sm: '(min-width: 600px) and (max-width: 959px)',
  md: '(min-width: 960px) and (max-width: 1279px)',
  lg: '(min-width: 1280px) and (max-width: 1919px)',
  xl: '(min-width: 1920px)',
};

// Common shadow configurations
export const shadows = {
  soft: '0 4px 20px rgba(0, 0, 0, 0.08)',
  medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
  strong: '0 15px 40px rgba(0, 0, 0, 0.15)',
  colored: (color) => `0 8px 25px ${color}40`,
};

// Performance utilities for smooth animations
export const performanceUtils = {
  // Hardware acceleration helpers
  gpuAcceleration: {
    willChange: 'transform',
    backfaceVisibility: 'hidden',
    perspective: 1000,
  },
  
  // Optimized hover states
  optimizedHover: {
    transition: transitions.hover,
    cursor: 'pointer',
    willChange: 'transform',
  },
  
  // Container optimization
  optimizedContainer: {
    contain: 'layout style paint',
    isolation: 'isolate',
  },
  
  // Reduce repaint/reflow
  transformOnly: {
    willChange: 'transform',
    backfaceVisibility: 'hidden',
  },
};

// Pre-optimized animation sets
export const animationSets = {
  // Smooth card hover without lag
  cardHover: {
    transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease',
    willChange: 'transform',
    '&:hover': {
      transform: 'translateY(-6px)',
    },
  },
  
  // Icon scale animation
  iconScale: {
    transition: 'transform 0.2s ease',
    willChange: 'transform',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  
  // Background fade
  backgroundFade: {
    transition: 'opacity 0.2s ease',
    willChange: 'opacity',
  },
};
