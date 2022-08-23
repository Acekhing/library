import { Button, TextField, ThemeProvider, FormControl } from "@mui/material";
import React from "react";
import theme from "../../theme/LigthTheme";
import "./Login.css";

const Login = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="Wrap">
          <div className="Hero"></div>
          <div className="Content">
            <h1 style={{ color: "#2C1810" }}>Login</h1>
            <p style={{ color: "#878787" }}>Enter your account details</p>
            <FormControl>
              <TextField
                fullWidth
                margin="dense"
                label="Username"
                variant="outlined"
                color="primary"
                required
                type={"text"}
              />
              <TextField
                fullWidth
                margin="dense"
                label="Password"
                variant="outlined"
                color="primary"
                required
                type={"password"}
              />
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: 30 }}
              >
                Login
              </Button>
            </FormControl>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Login;
