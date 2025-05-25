import { Box, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
export const SocialMedia = () => {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <IconButton component="a" href="https://github.com/Ghayth-Sabeaallil">
        <GitHubIcon fontSize="large" color="secondary" />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/ghayth-sabeaallil"
      >
        <LinkedInIcon fontSize="large" color="secondary" />
      </IconButton>
      <IconButton component="a" href="mailto:ghaessesa58@gmail.com">
        <EmailIcon fontSize="large" color="secondary" />
      </IconButton>
    </Box>
  );
};
