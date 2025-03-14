// src/theme/theme.jsx
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#FFCF4B",
      dark: "#27AE60",
      contrastText: "#FFBB00",
    },
    secondary: {
      main: "#FFB800",
      light: "#F9F9F9",
      dark: "#CECECE",
      contrastText: "#262338",
    },
    text: {
      primary: "#262338",
      secondary: "#56524C",
    },
    grey: {
      100: "#E0E0E0",
      200: "#B7B7B8",
      300: "#828282",
      400: "#4F4F4F",
      500: "#333333",
      600: "#F0F0F0",
    },
    background: {
      default: "#F9F9F9",
      paper: "#FFFFFF",
    },
    custom: {
      yellow: "#FFBB00",
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: { fontSize: "58px", fontWeight: 700 },
    h2: { fontSize: "36px", fontWeight: 600 },
    h3: { fontSize: "24px", fontWeight: 500 },
    h4: { fontSize: "20px", fontWeight: 500 },
    h5: { fontSize: "18px", fontWeight: 400 },
    h6: { fontSize: "16px", fontWeight: 400 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
        containedPrimary: {
          backgroundColor: "#FFCF4B",
          color: "#000000",
          "&:hover": { backgroundColor: "#FFBB00" },
        },
        containedSecondary: {
          backgroundColor: "#F9F9F9",
          color: "#262338",
          "&:hover": { backgroundColor: "#CEC6C6" },
        },
      },
    },
  },
});

export default theme;
