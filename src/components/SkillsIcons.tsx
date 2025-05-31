import { Box, Typography, useTheme } from "@mui/material";

type SkillsIconProps = {
  name: string;
  data: string[];
};
export default function SKillsIcon({ data, name }: SkillsIconProps) {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography
        variant="h5"
        sx={{
          color: theme.palette.text.secondary,
          fontWeight: 500,
        }}
      >
        {name}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
        {data.map((lang, index) => (
          <Box
            sx={{
              borderRadius: "50%",
              width: 70,
              height: 70,
              border: `3px solid ${theme.palette.primary.light}`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "0.5s",
              padding: 2,
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
                transform: "scale(1.2)",
              },
            }}
          >
            <img
              key={index}
              alt={lang}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${lang}/${lang}-original.svg`}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
