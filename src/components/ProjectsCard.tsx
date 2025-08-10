import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { show } from "../theme/animation";
import GitHubIcon from "@mui/icons-material/GitHub";
import RssFeedIcon from "@mui/icons-material/RssFeed";

type ProjectsCardProps = {
  title: string;
  github: string;
  demo?: string;
  img: string;
};

export default function ProjectsCard({
  title,
  github,
  img,
  demo,
}: ProjectsCardProps) {
  const theme = useTheme();
  return (
    <>
      <Card
        sx={{
          boxShadow: 3,
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.primary.light,
          border: `2px outset ${theme.palette.primary.contrastText}`,
          animation: `${show} 1s ease-in-out`,
          width: 250,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`assets/${img}.png`}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: theme.palette.text.secondary,
                userSelect: "none",
              }}
            >
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton
            component="a"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              fontSize="large"
              sx={{ color: theme.palette.action.hover }}
            />
          </IconButton>
          {demo && (
            <IconButton
              component="a"
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RssFeedIcon
                fontSize="large"
                sx={{ color: theme.palette.action.hover }}
              />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </>
  );
}
