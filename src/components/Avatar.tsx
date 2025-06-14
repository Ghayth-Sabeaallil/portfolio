import { Box, useTheme } from "@mui/material";
import avatar from "/assets/avatar.png"; // Adjust the path as necessary

export default function Avarat() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        boxShadow: 3,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.secondary.main,
        border: `2px outset ${theme.palette.primary.contrastText}`,
        width: "auto",
        maxWidth: 200,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={avatar}
        style={{
          width: "75%",
          height: "auto",
          display: "block",
          filter: `drop-shadow(0 -4px 6px ${theme.palette.text.primary})`,
        }}
        alt="Avatar"
      />
    </Box>
  );
}
