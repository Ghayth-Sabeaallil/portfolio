import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { data } from "../lib/data";
import ContactInfo from "./ContactInfo";
import { SwitchMode } from "./SwitchMode";
import Avarat from "./Avatar";
import { SocialMedia } from "./SocialMedia";
import { useEffect, useRef, useState } from "react";
export default function PrimaryBox() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState("auto");
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (isMobile) {
      setExpanded((prev) => !prev);
    }
  };
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight + "px");
    }
  }, []);
  return (
    <Box
      ref={contentRef}
      onClick={handleClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: {
          xs: "100%",
          sm: "100%",
          md: "fit-content",
          lg: "fit-content",
        },
        gap: 3,
        padding: "1rem",
        border: `2px solid ${theme.palette.action.hover}`,
        boxShadow: 3,
        backgroundColor: theme.palette.primary.light,
        borderRadius: theme.shape.borderRadius,
        overflow: "hidden",
        maxHeight: {
          xs: expanded ? contentHeight : "26rem",
          sm: expanded ? contentHeight : "26rem",
          md: "100%",
          lg: "100%",
        },
        transition: "max-height 0.5s ease, opacity 0.3s ease",
        opacity: {
          xs: expanded ? 1 : 0.95,
          sm: expanded ? 1 : 0.95,
          md: expanded ? 1 : 0.95,
          lg: 1,
        },
        cursor: {
          xs: "pointer",
          sm: "pointer",
          md: "default",
          lg: "default",
        },
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
