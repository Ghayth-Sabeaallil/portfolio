import { Box, Typography, useTheme } from "@mui/material";

export default function Education() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        border: `2px outset ${theme.palette.primary.contrastText}`,

        backgroundColor: theme.palette.secondary.main,
        gap: 5,
        padding: 2,
        borderRadius: theme.shape.borderRadius,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: theme.palette.text.secondary,
          fontWeight: 500,
        }}
      >
        Education
      </Typography>
    </Box>
  );
}
