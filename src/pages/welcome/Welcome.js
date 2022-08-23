import { Button, ThemeProvider, Link } from "@mui/material";
import React from "react";
import theme from "../../theme/LigthTheme";
import "./Welcome.css";

const WelcomePage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="Wrap">
          <div className="Hero"></div>
          <div className="Content">
            <h1 style={{ color: "#2C1810" }}>Online Bookstore</h1>
            <p>Browse & Access over 12K Books</p>
            <Link underline="none" href="/login">
              <Button
                className="Btn"
                style={{ marginTop: 100, width: "100%" }}
                variant="contained"
                color="accent"
              >
                Login
              </Button>
            </Link>
            <Link underline="none" href="/signup">
              <Button
                className="Btn"
                style={{ marginTop: 16, width: "100%" }}
                variant="contained"
                color="primary"
              >
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default WelcomePage;
