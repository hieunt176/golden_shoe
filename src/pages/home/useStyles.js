import { makeStyles } from "@mui/styles";

import theme from "../../theme";

export const useStyles = makeStyles({
  root: {
    color: "#303841",
    fontFamily: "Rubik,sans-serif",
  },

  main_content: {
    maxWidth: 800,
    margin: "0 auto",
    display: "flex",
    position: "relative",

    [theme.breakpoints.up("md")]: {
      height: "100vh",
    },

    "&:before": {
      content: "''",
      display: "block",
      position: "fixed",
      width: "300%",
      height: "100%",
      top: "50%",
      left: "50%",
      zIndex: -1,
      borderRadius: "100%",
      transform: "translateX(-50%) skewY(-8deg)",
      backgroundColor: "#f6c90e",
      animation: "wave 8s ease-in-out infinite alternate",
      WebkitAnimation: "wave 8s ease-in-out infinite alternate",
    },
  },

  grid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
