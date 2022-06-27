import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  item: {
    display: "flex",
    padding: "20px 0",
    color: "#303841",
    fontFamily: "Rubik,sans-serif",
  },

  item_left: (props) => ({
    backgroundColor: props.color,
    width: "90px",
    height: "90px",
    borderRadius: "100%",
    marginRight: "34px",

    "& img": {
      width: "140%",
      transform: "rotate(-28deg) translateY(-40px)",
      filter: "drop-shadow(0 30px 20px rgba(0,0,0,.2))",
    },
  }),

  item_right: {
    flex: 1,
    "& .flex-display": {
      display: "flex",
      alignItems: "center",
    },
  },

  item_name: {
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "1.5",
    marginBottom: "10px",
  },

  item_price: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "16px",
  },

  item_action: {
    justifyContent: "space-between",
  },

  item_count_btn: {
    cursor: "pointer",
    width: "28px",
    height: "28px",
    lineHeight: "28px",
    borderRadius: "100%",
    border: "none",
    backgroundColor: "#eee",
    fontSize: "16px",
    fontWeight: "700",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: ".2s",
  },

  item_count_number: {
    fontSize: "14px",
    margin: "0 8px",
    width: "20px",
    textAlign: "center",
  },

  item_remove: {
    width: "28px",
    height: "28px",
    cursor: "pointer",
    transition: "all .25s ease",
    borderRadius: "100%",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6c90e",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    MsUserSelect: "none",
    userSelect: "none",

    "& img": {
      width: "16px",
      height: "16px",
    },
  },
});
