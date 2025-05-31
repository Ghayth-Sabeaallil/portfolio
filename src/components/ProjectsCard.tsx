import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { show } from "../theme/animation";
import GitHubIcon from "@mui/icons-material/GitHub";
import RssFeedIcon from "@mui/icons-material/RssFeed";

type ProjectsCardProps = {
  title: string;
  github: string;
  demo: string;
};

export default function ProjectsCard({
  title,
  github,
  demo,
}: ProjectsCardProps) {
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.primary,
            fontWeight: 800,
            userSelect: "none",
          }}
        >
          {title}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          <IconButton
            component="a"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              fontSize="large"
              sx={{ color: theme.palette.action.hover }}
            />
          </IconButton>
          <IconButton
            component="a"
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <RssFeedIcon
              fontSize="large"
              sx={{ color: theme.palette.action.hover }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
