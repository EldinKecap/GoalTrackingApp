import { Alert, Button, Stack, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import app from "../firebase/firebaseSetup";
import TitleBar from "../components/TitleBar";
import UserProfileContext from "../store/UserProfileContext";
import { useNavigate } from "react-router-dom/dist";

export default function CreateAnAccount() {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const userCtx = useContext(UserProfileContext);
  const navigate = useNavigate();

  function onSubmitHandler() {
    setAccountCreated(false);
    setErrorMessage("");

    if (email == "") {
      setEmailError(true);
      return;
    }
    if (password == "") {
      setPasswordError(true);
      return;
    }

    if (password != confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    if (!email.includes("@")) {
      setErrorMessage("Email missing @ symbol");
      return;
    }

    createUserWithEmailAndPassword(auth, email.trim(), password)
      .then((userCredential) => {
        const user = userCredential.user;
        setAccountCreated(true);
        localStorage.setItem("user", JSON.stringify(user));
        userCtx.setUser(user)
        console.log(userCtx.user);
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorMessage(error.message.slice(10));
      });
  }

  return (<>
    <TitleBar title={"Create an account"} />
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
      <TextField
        label="Confirm password"
        value={confirmPassword}
        error={confirmPasswordError}
        onChange={(e) => {
          if (e.currentTarget.value == "") {
            setConfirmPasswordError(true);
          } else {
            setConfirmPasswordError(false);
          }
          setConfirmPassword(e.currentTarget.value);
        }}
        type="password"
        required
      />
      <Button variant="contained" onClick={onSubmitHandler}>
        Create
      </Button>
      {errorMessage != "" ? <Alert severity="error">{errorMessage}</Alert> : ""}

      {accountCreated ? <Alert severity="success">Account created</Alert> : ""}
    </Stack>
  </>
  );
}
