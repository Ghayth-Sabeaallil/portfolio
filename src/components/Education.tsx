import { Box, Typography, useTheme } from "@mui/material";
import TimeLine from "./TimeLine";
import { education } from "../lib/data";
export default function Education() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: `2px outset ${theme.palette.primary.contrastText}`,
        overscrollBehavior: "auto",
        overflowY: "auto",
        backgroundColor: theme.palette.secondary.main,
        gap: 5,
        padding: 2,
        borderRadius: theme.shape.borderRadius,
        width: "100%",
        boxSizing: "border-box",
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
      <TimeLine data={education} />
    </Box>
  );
}
