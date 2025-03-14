import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import AppShell from "./pages/appShell";
import theme from "./theme/theme.ts"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ overflowX: "clip" }} id="sounak">
        <AppShell />
      </Box>
    </ThemeProvider>
  );
}

export default App;
