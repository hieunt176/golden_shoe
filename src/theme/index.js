import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 420,
      md: 900,
      lg: 1140,
      xl: 1430,
    },
  },
});
export default theme;
