import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#60a69f",
    },
    secondary: {
      main: "#fe7095",
    },
  },
  typography: {
    fontFamily: `"Dancing Script", "cursive"`,
    body1: {
      fontFamily: `"EB Garamond", "serif"`,
      fontSize: 18,
    },
    button: {
      fontFamily: `"EB Garamond", "serif"`,
      fontSize: 18,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
