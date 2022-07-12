import * as React from "react";
import { useState } from "react";
import { Axios, AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import api from "../instance";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./login.module.sass";

interface IData {
  message: string;
  success: boolean;
}

interface IResponse {
  data: IData;
  status: number
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        ValPal
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  type SignInType = "username" | "email";
  const navigate = useNavigate()
  const [loginType, setLoginType] = useState<SignInType>("email");
  const [username, setUsername] = useState<string | null>("");
  const [email, setEmail] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");

  const [error, setError] = useState<string>("")

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);


  const SignIn = async () => {
    try{
    const response: IResponse = await api.post("/auth/login", {
      username,
      email,
      password,
    });

    console.log(response);
    if (response.data.success === true) {
      sessionStorage.setItem("token", response.data.message)
      const Redirect = setTimeout(() => navigate("/"), 3000);
      setOpenSuccess(true);
    }
    if (response.data.success === false) {
      setError(response.data.message)
      setOpenError(true);
    }
    if (response.status != 200){
      setError("something went wront. Please try again")
      setOpenError(true);

    }
  }catch(error : any){
    console.log(error.response.data.message)
    setError(error.response.data.message)
    setOpenError(true);
    
  }
    
    
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (loginType == 'username'){
      setEmail("")
    }
    if (loginType == 'email'){
      setUsername("")
    }
    console.log({username , email , password});
    SignIn();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {loginType === "username" ? (
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="userame"
                autoFocus
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            ) : null}
            {loginType === "email" ? (
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            ) : null}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {loginType == "username" ? (
              <h1
                onClick={() => {
                  setLoginType("email");
                  setUsername("");
                }}
                className={styles.switch}
              >
                use email instead
              </h1>
            ) : loginType == "email" ? (
              <h1
                onClick={() => {
                  setLoginType("username");
                  setEmail("");
                }}
                className={styles.switch}
              >
                use username instead
              </h1>
            ) : null}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <Snackbar
        open={openSuccess}
        autoHideDuration={3000}
        onClose={() => setOpenSuccess(false)}
      >
        <Alert
          onClose={() => setOpenSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Successfully logged in
        </Alert>
      </Snackbar>
      <Snackbar
        open={openError}
        autoHideDuration={3000}
        onClose={() => setOpenError(false)}
      >
        <Alert
          onClose={() => setOpenError(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
