import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { data } from "../lib/data";
import Rows from "./Rows";
import { SwitchMode } from "./SwitchMode";
import Avarat from "./Avatar";
import { SocialMedia } from "./SocialMedia";
export default function Contact() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
        gap: 3,
        padding: "3rem 2rem",
        boxShadow: 3,
        backgroundColor: theme.palette.primary.light,
        borderRadius: theme.shape.borderRadius,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <SwitchMode />
        <Avarat />
      </Box>
      {data.map((item, index) => (
        <Rows
          key={index}
          title={item.title}
          info={item.data}
          icon={item.icon}
        />
      ))}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 1,
        }}
      >
        <SocialMedia />
      </Box>
    </Box>
  );
}
