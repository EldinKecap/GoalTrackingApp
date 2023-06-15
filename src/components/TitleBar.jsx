import { AppBar, Typography } from "@mui/material";

export default function TitleBar({title}) {
    
  return (
    <AppBar elevation={0}>
      <Typography variant="h4" component="h1" m={0.5}>
        {title}
      </Typography>
    </AppBar>
  );
}
