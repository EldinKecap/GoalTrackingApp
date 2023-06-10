import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Stack spacing={2}>
      <TextField label="Enter email" />
      <TextField label="Enter password" />
      <Button variant='contained'>Login</Button>
      <Typography>
        <Link to="/createAccount" style={{color:"lightblue",textDecoration:"underline"}}>
            Create an account
        </Link>
      </Typography>
    </Stack>
  );
}
