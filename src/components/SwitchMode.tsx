import { Box, Switch } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useThemeModeContext } from "../context/ThemeModeContext";

export const SwitchMode = () => {
  const { colorMode, toggleColorMode } = useThemeModeContext();

  // Handles both click and change events
  const stopPropagationAndToggle = (event: React.SyntheticEvent) => {
    event.stopPropagation();
    toggleColorMode();
  };

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <LightModeIcon />
      <Switch
        checked={colorMode === "dark"}
        onClick={stopPropagationAndToggle}
        onChange={stopPropagationAndToggle}
      />
      <DarkModeIcon />
    </Box>
  );
};
