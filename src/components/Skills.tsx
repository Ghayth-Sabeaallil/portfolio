import { Box, useTheme } from "@mui/material";
import { languages, style, db, tools, frameworks, os } from "../lib/data";
import SKillsIcon from "./SkillsIcons";

export default function Skills() {
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
      <SKillsIcon data={languages} name={"Languages"} />
      <SKillsIcon data={style} name={"Style"} />
      <SKillsIcon data={db} name={"Database"} />
      <SKillsIcon data={tools} name={"Tools"} />
      <SKillsIcon data={frameworks} name={"Framworks"} />
      <SKillsIcon data={os} name={"Operating System"} />
    </Box>
  );
}
