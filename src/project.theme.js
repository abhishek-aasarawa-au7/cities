import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#AD0B39",
      main: "#600620",
      dark: "#4B061A",
      contrastText: "#000",
    },
    secondary: {
      light: "#FFFFFF",
      main: "#F5F5F5",
      dark: "#EBEBEB",
      contrastText: "#fff",
    },
  },
});

export default theme;
