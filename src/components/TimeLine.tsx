import { Box, Typography, useTheme } from "@mui/material";
import { ping, fadeUp } from "../theme/animation";
type TimeLineProps = {
  data: {
    name: string;
    description: string;
    date: string;
    img?: string;
  }[];
};
export default function TimeLine({ data }: TimeLineProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        borderLeft: 4,
        borderColor: theme.palette.primary.light,
        marginLeft: 2,
        gap: 3,
        animation: `${fadeUp} 1s ease-in-out`,
      }}
    >
      {data.map((item, index) => (
        <Box key={index} sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              left: item.img ? "-20px" : "-10px",
              top: "6px",
              backgroundColor: theme.palette.action.hover,
              borderRadius: "50%",
              width: item.img ? 35 : 15,
              height: item.img ? 35 : 15,
              animation: `${ping} 2s cubic-bezier(0, 0, 0.2, 1) infinite`,
            }}
          >
            {item.img && (
              <img
                src={`/assets/${item.img}.png`}
                alt={item.img}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "50%",
                  padding: "2px",
                }}
              />
            )}
          </Box>
          <Box sx={{ paddingLeft: "50px" }}>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 700,
              }}
            >
              {item.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.action.hover }}
            >
              {item.date}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 500,
              }}
            >
              {item.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
