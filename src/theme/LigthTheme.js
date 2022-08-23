import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#DAAA63",
      darker: "#BE7810",
      contrastText: "#000",
    },
    accent: {
      main: "#2C1810",
      contrastText: "#fff",
    },
    disabled: {
      main: "#878787",
    },
  },
});

export default theme;
