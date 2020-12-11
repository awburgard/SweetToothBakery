import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme({
  typography: {
    fontFamily: `"Space Mono", "monospace"`,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
