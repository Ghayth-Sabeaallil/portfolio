import type { SvgIconComponent } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import { show } from "../theme/animation";

type CardsProps = {
  title: string;
  description: string;
  icon: SvgIconComponent;
};

export default function Cards({ title, description, icon: Icon }: CardsProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        boxShadow: 3,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.primary.light,
        border: `2px outset ${theme.palette.primary.contrastText}`,
        animation: `${show} 1s ease-in-out`,
        padding: 2,
        display: "flex",
        maxWidth: 300,
        minWidth: 200,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Icon sx={{ color: theme.palette.action.hover }} fontSize="large" />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.primary,
            fontWeight: 800,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            fontWeight: 500,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
