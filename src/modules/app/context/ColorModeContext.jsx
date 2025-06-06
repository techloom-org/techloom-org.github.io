import { createContext, useContext } from 'react';

export const ColorModeContext = createContext();

export function useColorMode() {
  return useContext(ColorModeContext);
}

export function ColorModeProvider({ children, value }) {
  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
}
