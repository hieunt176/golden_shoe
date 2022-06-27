import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  card: {
    background: "#fff",
    boxSizing: "border-box",
    width: "360px",
    height: "600px",
    position: "relative",
    boxShadow:
      "0 3.2px 2.2px rgb(0 0 0 / 2%), 0 7px 5.4px rgb(0 0 0 / 3%), 0 12.1px 10.1px rgb(0 0 0 / 4%), 0 19.8px 18.1px rgb(0 0 0 / 4%), 0 34.7px 33.8px rgb(0 0 0 / 5%), 0 81px 81px rgb(0 0 0 / 7%)",
    borderRadius: "30px",
    overflow: "hidden",
    marginBottom: "40px",
    padding: "0 28px",

    "&:before": {
      content: "''",
      display: "block",
      position: "absolute",
      width: "300px",
      height: "300px",
      borderRadius: "100%",
      backgroundColor: "#f6c90e",
      top: "-20%",
      left: "-50%",
      zIndex: "0",
    },
  },

  card_logo: {
    margin: "12px 0",
    position: "relative",
  },

  card_title: {
    fontSize: "24px",
    fontWeight: "700",
    margin: "16px 0",
    position: "relative",

    "& span": {
      float: "right",
    },
  },

  card_body: {
    height: "calc(100% - 98px)",
    width: "calc(100% - 52px)",
    position: "absolute",
    overflowY: "scroll",

    "&::-webkit-scrollbar": {
      display: "none",
    },

    "& span": {
      fontSize: "14px",
      margin: "14px auto",
      position: "absolute",
    },
  },
});
