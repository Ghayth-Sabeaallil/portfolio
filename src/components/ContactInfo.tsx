import { Box, Typography, useTheme } from "@mui/material";
import type { SvgIconComponent } from "@mui/icons-material";

type RowProps = {
  title: string;
  info: string;
  icon: SvgIconComponent;
};

export default function ContactInfo({ title, info, icon: Icon }: RowProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: 1.5,
          border: `2px outset ${theme.palette.primary.contrastText}`,
          backgroundColor: theme.palette.secondary.main,
          borderRadius: theme.shape.borderRadius,
        }}
      >
        <Icon sx={{ color: theme.palette.action.hover }} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="body1"
          sx={{ color: theme.palette.text.secondary, userSelect: "none" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
          {info}
        </Typography>
      </Box>
    </Box>
  );
}
