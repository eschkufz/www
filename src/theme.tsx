import { createTheme, TypographyVariantsOptions } from "@mui/material";

const typography: TypographyVariantsOptions = {
  body1: {
    fontWeight: 400,
    fontSize: "19px",
    lineHeight: "32px",
    letterSpacing: "0.15px",
  },
  body2: {
    fontWeight: 300,
    fontSize: "14px",
    lineHeight: "19.57px",
    letterSpacing: "0.5px",
  },

  button: {
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "14.68px",
    letterSpacing: "1.25px",
  },
  caption: {
    fontWeight: 400,
    fontSize: "11px",
    lineHeight: "13.45px",
    letterSpacing: "1.5px",
  },
  overline: {
    fontWeight: 700,
    fontSize: "11px",
    lineHeight: "13.45px",
    letterSpacing: "2px",
  },

  h1: {
    fontWeight: 400,
    fontSize: "32px",
    lineHeight: "39.14px",
    letterSpacing: "0.15px",
  },
  h2: {
    fontWeight: 700,
    fontSize: "27px",
    lineHeight: "33.02px",
    letterSpacing: "0.25px",
  },
  h3: {
    fontWeight: 400,
    fontSize: "23px",
    lineHeight: "28.13px",
    letterSpacing: "0.15px",
  },
  h4: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19.57px",
    letterSpacing: "1.25px",
  },
  h5: {
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "19.57px",
    letterSpacing: "0.5px",
  },
  h6: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.5px",
  },

  subtitle1: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19.57px",
    letterSpacing: "0.5px",
  },
  subtitle2: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "0.5px",
  },
};

export const theme = createTheme({
    typography
});