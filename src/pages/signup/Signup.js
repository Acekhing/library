import {
  Button,
  TextField,
  ThemeProvider,
  FormControl,
  Link,
} from "@mui/material";
import React from "react";
import theme from "../../theme/LigthTheme";

const Signup = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="Wrap">
          <div className="Hero"></div>
          <div className="Content">
            <h1 style={{ color: "#2C1810" }}>Create Account</h1>
            <p style={{ color: "#878787" }}>Almost there!</p>
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
              <TextField
                fullWidth
                margin="dense"
                label="Confirm Password"
                variant="outlined"
                color="primary"
                required
                type={"password"}
              />
              <Link href="home">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: 30 }}
                >
                  Register
                </Button>
              </Link>
            </FormControl>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Signup;
