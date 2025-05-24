import { Box, useTheme } from "@mui/material";
import avatar from "../assets/avatar.png"; // Adjust the path as necessary

export default function Avarat() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        boxShadow: 3,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.primary.main,
        border: `2px outset ${theme.palette.primary.contrastText}`,
        width: "auto",
        maxWidth: 200,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={avatar}
        style={{ width: "85%", height: "auto", display: "block" }}
        alt="Avatar"
      />
    </Box>
  );
}
