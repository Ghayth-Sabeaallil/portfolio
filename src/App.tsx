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
          flexDirection: "row",
          justifyContent: "center",
          gap: 2,
          width: "100%",
        }}
      >
        <PrimaryBox />
        <SecondaryBox />
      </Box>
    </ThemeProvider>
  );
}
