import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CountUp from "react-countup";
import { slideInFromUp, slideInFromDown } from "../theme/animation";

export default function CounterBox() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        width: {
          xs: "100%",
          sm: "100%",
          md: "fit-content",
          lg: "fit-content",
        },
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        padding: "1rem",
        border: `2px solid ${theme.palette.action.hover}`,
        boxShadow: 3,
        backgroundColor: theme.palette.primary.light,
        borderRadius: theme.shape.borderRadius,
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          animation: `${slideInFromUp} 1s ease-in-out`,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.action.hover,
            fontFamily: "Roboto, sans-serif",
            fontWeight: 600,
          }}
        >
          Applied Jobs
        </Typography>
        <CountUp
          style={{
            color: theme.palette.action.hover,
            fontFamily: "Roboto, sans-serif",
            fontWeight: 600,
            fontSize: "2rem",
          }}
          end={134}
          duration={5}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          animation: `${slideInFromDown} 1s ease-in-out`,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.action.hover,
            fontFamily: "Roboto, sans-serif",
            fontWeight: 600,
          }}
        >
          Inteview
        </Typography>
        <CountUp
          style={{
            color: theme.palette.action.hover,
            fontFamily: "Roboto, sans-serif",
            fontWeight: 600,
            fontSize: "2rem",
          }}
          end={0}
          duration={5}
        />
      </Box>
    </Box>
  );
}
