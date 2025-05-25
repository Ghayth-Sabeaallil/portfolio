import { Box, Typography, useTheme } from "@mui/material";

export default function About() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.palette.secondary.main,
        padding: 1,
        borderRadius: theme.shape.borderRadius,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.text.primary,
          userSelect: "none",
          fontWeight: 300,
        }}
      >
        About
      </Typography>
    </Box>
  );
}
