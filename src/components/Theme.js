import { createTheming } from '@callstack/react-theme-provider'
import myTheme from './baseTheme';

export const { ThemeProvider, withTheme, useTheme  } = createTheming(myTheme)
