import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

type UnpackArray<T> = T extends (infer U)[] ? U : T;

const breakpointEm = {
  xs: `480px`,
  sm: `700px`,
  md: `900px`,
  lg: `1100px`,
  xl: "1300px",
};
const breakpoints = createBreakpoints(breakpointEm);

const theme = extendTheme({
  breakpoints,
  fonts: {
    body: `'Open Sans', sans-serif;`,
    heading: `'Open Sans', sans-serif;`,
    th: `'Open Sans', sans-serif;`,
    input: `'Open Sans', sans-serif;`,
  },
  config: {
    initialColorMode: "dark",
  },
});

export default theme;
