import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF7033",
    },
    secondary: {
      main: "#FDFF00",
    },
    background: {
      default: "#222222",
      paper: "#1A1A1A"
    }
  },
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: "#FF7033",
        borderRadius: 4,
        width: 120,
        height: 40,
        color: "#fff",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#FF7033",
        }
      }
    }
  }
});

export default theme;
