import { Box, Typography, useTheme } from "@mui/material";
import { projects } from "../lib/data";
import ProjectsCard from "./ProjectsCard";

export default function Projects() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        border: `2px outset ${theme.palette.primary.contrastText}`,
        overscrollBehavior: "auto",
        overflowY: "auto",
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
        Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {projects.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            github={project.github}
            demo={project.demo}
            img={project.img}
          />
        ))}
      </Box>
    </Box>
  );
}
