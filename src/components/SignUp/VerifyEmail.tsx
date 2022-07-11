import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios, { AxiosInstance } from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import styles from './signup.module.sass'


interface IData {
  message: string;
  success: boolean;
}

interface IResponse {
  data: IData;
}

type Verified = true | false | null;

const VerifyEmail = () => {
  const [verified, setVerified] = useState<Verified>(null);
  const navigate = useNavigate();
  const { token } = useParams<{ token?: string }>();
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  console.log(token);

  const api: AxiosInstance = axios.create({
    baseURL: "https://valpal-python.herokuapp.com/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const verifyEmail = async () => {
    const response: IResponse = await api.post(`auth/sign-up/verify/${token}`);

    if (response.data.success === true) {
      handleClose();
      setVerified(true);
      const Redirect = setTimeout(() => navigate("/login"), 5000);
    }
  };

  useEffect(() => {
    handleToggle();
    verifyEmail();
  }, []);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className={styles.verified}>
      {verified ? (
        <div>
          <h1>Email Verified. you will be redirected to the login page</h1>
        </div>
      ) : verified == false ?
        <div>
          <h1>Something went wrong. Please try again</h1>
        </div>
      : null}
      </div>
    </div>
  );
};

export default VerifyEmail;
