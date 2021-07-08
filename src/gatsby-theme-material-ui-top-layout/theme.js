import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    fontFamily: '"Helvetica Neue", "Roboto", "Arial", sans-serif'
  }
});
theme = responsiveFontSizes(theme);

export default theme;