import { useTheme } from "@mui/material/styles";
import HeaderTabs from "./HeaderTabs";
import { Box } from "@mui/material";
import { useState } from "react";
import Education from "./Education";
import Experiences from "./Experiences";
import About from "./about";
export default function SecondaryBox() {
  const theme = useTheme();
  const [tabType, setTableType] = useState<
    "about" | "education" | "experiences"
  >("about");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        width: "50%",
        padding: "1rem",
        border: `2px solid ${theme.palette.action.hover}`,
        boxShadow: 3,
        backgroundColor: theme.palette.primary.light,
        borderRadius: theme.shape.borderRadius,
      }}
    >
      <HeaderTabs tabType={tabType} onTabChange={setTableType} />
      {tabType === "about" && <About />}
      {tabType === "education" && <Education />}
      {tabType === "experiences" && <Experiences />}
    </Box>
  );
}
