// import React from "react";

import { createTheming } from '@callstack/react-theme-provider'
import myTheme from '../baseTheme';

export const { ThemeProvider, withTheme, useTheme  } = createTheming(myTheme)



// const Theme = (children: Array<React.ReactNode>): JSX.Element => {
//   return <ThemeProvider theme={{ mode: "light" }}>{children}</ThemeProvider>;
// };

// export default Theme;
