import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  item: {
    color: "#303841",
    fontFamily: "Rubik,sans-serif",
    marginBottom: 80,
  },

  item_img: {
    borderRadius: "30px",
    height: "380px",
    display: "flex",
    alignItems: "center",
    overflow: "hidden,",

    "& img": {
      display: "block",
      width: "100%",
      filter: "drop-shadow(0 30px 20px rgba(0,0,0,.2))",
      transform: "rotate(-24deg)",
      marginLeft: "-16px",
    },
  },

  item_name: {
    fontSize: "20px",
    fontWeight: "700",
    margin: "26px 0 20px",
    lineHeight: "1.5",
  },

  item_description: {
    fontSize: "13px",
    color: "#777",
    lineHeight: "1.8",
    marginBottom: "20px",
  },

  item_bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  item_price: {
    fontSize: "18px",
    fontWeight: "700",
  },

  item_btn: {
    cursor: "pointer",
    background: "#f6c90e",
    fontWeight: "700",
    fontSize: "14px",
    boxSizing: "border-box",
    width: "auto",
    height: "46px",
    minWidth: "46px",
    padding: "16px 20px",
    borderRadius: "100px",
    border: "none",
    color: "#303841",
    fontFamily: "Rubik,sans-serif",

    "&:hover": {
      backgroundColor: "#f8d43f",
      boxShadow: "-2px 2px 4px rgb(0 0 0 / 15%)",
    },
  },

  item_btn_checked: {
    width: "46px",
    height: "46px",
    background: "#f6c90e",
    borderRadius: "50%",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& img": {
      width: "20px",
    },
  },
});
