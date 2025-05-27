import PrimaryBox from "./components/PrimaryBox";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/muiTheme";
import {
  ThemeModeProvider,
  useThemeModeContext,
} from "./context/ThemeModeContext";
import { useMemo } from "react";
import SecondaryBox from "./components/SecondaryBox";

function App() {
  return (
    <ThemeModeProvider>
      <AppWithTheme />
    </ThemeModeProvider>
  );
}

export default App;

function AppWithTheme() {
  const { colorMode } = useThemeModeContext();
  const muiTheme = useMemo(() => theme(colorMode), [colorMode]);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          gap: 2,
          padding: 2,
        }}
      >
        <PrimaryBox />
        <SecondaryBox />
      </Box>
    </ThemeProvider>
  );
}
