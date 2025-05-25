import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { data } from "../lib/data";
import ContactInfo from "./ContactInfo";
import { SwitchMode } from "./SwitchMode";
import Avarat from "./Avatar";
import { SocialMedia } from "./SocialMedia";
export default function PrimaryBox() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
        gap: 3,
        padding: "1rem",
        border: `2px solid ${theme.palette.action.hover}`,
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
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.text.primary,
            fontFamily: "Roboto, sans-serif",
            fontWeight: 600,
          }}
        >
          GHAYTH SABEAALLIL
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: theme.palette.secondary.main,
            padding: 1,
            borderRadius: theme.shape.borderRadius,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.primary,
              userSelect: "none",
              fontWeight: 300,
            }}
          >
            FRONTEND DEVELOPER - REACT
          </Typography>
        </Box>
      </Box>

      {data.map((item, index) => (
        <ContactInfo
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
