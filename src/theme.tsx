import { createTheme, TypographyVariantsOptions } from "@mui/material";

const typography: TypographyVariantsOptions = {
  body1: {
    fontFamily: "Helvetica",
    fontWeight: 300,
    fontSize: "12pt",
  },
  body2: {
    fontWeight: 300,
    fontSize: "10pt",
    color: "#555555"
  },

  button: {
    color: "red",
  },
  caption: {
    color: "red",
  },
  overline: {
    color: "red",
  },

  h1: {
    fontFamily: "Helvetica",
    textTransform: "lowercase",
    fontWeight: "bolder",
    fontSize: "36pt",
    letterSpacing: "-0.5px",
  },
  h2: {
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: "18pt",
    letterSpacing: "-0.5px",
  },
  h3: {
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: "12pt",
  },
  h4: {
    color: "red",
  },
  h5: {
    color: "red",
  },
  h6: {
    color: "red",
  },

  subtitle1: {
    color: "red",
  },
  subtitle2: {
    color: "red",
  },
};

export const theme = createTheme({
    typography
});