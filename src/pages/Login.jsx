import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import app from "../firebase/firebaseSetup";
import UserProfileContext from "../store/UserProfileContext";

export default function Login() {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const userCtx = useContext(UserProfileContext);
  const navigator = useNavigate();
  
  function onSubmitHandler() {
    setLoggedIn(false);
    setErrorMessage("");
    if (email == "") {
      setEmailError(true);
      return;
    }
    if (password == "") {
      setPasswordError(true);
      return;
    }

    if (!email.includes("@")) {
      setErrorMessage("Email missing @ symbol");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("user", JSON.stringify(user));
        userCtx.setUser(user);
        console.log(userCtx.user);
        setLoggedIn(true);
        navigator('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode, error.message);
        setErrorMessage(error.message.slice(10));
      });
  }

  return (
    <Stack spacing={2}>
      <TextField
        label="Enter email"
        value={email}
        error={emailError}
        onChange={(e) => {
          if (e.currentTarget.value == "") {
            setEmailError(true);
          } else {
            setEmailError(false);
          }
          setEmail(e.currentTarget.value);
        }}
        required
      />
      <TextField
        label="Enter password"
        value={password}
        error={passwordError}
        onChange={(e) => {
          if (e.currentTarget.value == "") {
            setPasswordError(true);
          } else {
            setPasswordError(false);
          }
          setPassword(e.currentTarget.value);
        }}
        type="password"
        required
      />
      <Button variant="contained" onClick={onSubmitHandler}>
        Login
      </Button>
      {errorMessage != "" ? <Alert severity="error">{errorMessage}</Alert> : ""}

      {loggedIn ? <Alert severity="success">Login successful</Alert> : ""}
      <Typography>
        <Link
          to="/createAccount"
          style={{ color: "lightblue", textDecoration: "underline" }}
        >
          Create an account
        </Link>
      </Typography>
    </Stack>
  );
}
