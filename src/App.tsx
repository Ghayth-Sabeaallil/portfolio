import Contact from "./components/Contact";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/muiTheme";
import {
  ThemeModeProvider,
  useThemeModeContext,
} from "./context/ThemeModeContext";
import { useMemo } from "react";

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
      <Contact />
    </ThemeProvider>
  );
}
