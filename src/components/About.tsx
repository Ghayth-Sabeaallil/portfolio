import { Box, Typography, useTheme } from "@mui/material";
import { cards } from "../lib/data"; // Adjust the import path as necessary
import Cards from "./Cards";
import { slideInFromDown, slideInFromUp } from "../theme/animation";

export default function About() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        border: `2px outset ${theme.palette.primary.contrastText}`,
        backgroundColor: theme.palette.secondary.main,
        gap: 3,
        padding: 2,
        borderRadius: theme.shape.borderRadius,
        overscrollBehavior: "auto",
        overflowY: "auto",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: theme.palette.text.secondary,
          fontWeight: 500,
          userSelect: "none",
        }}
      >
        About Me
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: theme.palette.text.primary,
          fontWeight: 500,
          animation: `${slideInFromUp} 1s ease-in-out`,
        }}
      >
        I'm a Frontend Developer specializing in building responsive, scalable,
        and high-performance web applications using React, TypeScript, Tailwind
        CSS, MUI, Sass, and REST APIs. I’m passionate about turning modern
        design systems into clean, efficient code and crafting user interfaces
        that are both intuitive and engaging.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: theme.palette.text.primary,
          fontWeight: 500,
          animation: `${slideInFromDown} 1s ease-in-out`,
        }}
      >
        My focus is on creating seamless user experiences that not only look
        great but also function flawlessly across devices. With a strong eye for
        detail and a deep understanding of frontend architecture, I bring
        clarity to complexity and deliver polished, production-ready products.
        Whether it's a landing page or a full-scale web app, I code with
        creativity and precision.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: theme.palette.text.secondary,
          fontWeight: 500,
          userSelect: "none",
        }}
      >
        Doing
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {cards.map((card, index) => (
          <Cards
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </Box>
    </Box>
  );
}
