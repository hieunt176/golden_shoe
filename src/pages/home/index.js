import React from "react";

import Card from "./card";

import Grid from "@mui/material/Grid";

import { useStyles } from "./useStyles";

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.main_content}>
        <Grid container justifyContent="center" alignItems="center" spacing={0}>
          <Grid item xs={12} md={6} className={classes.grid}>
            <Card title="Our Products" />
          </Grid>
          <Grid item xs={12} md={6} className={classes.grid}>
            <Card title="Your cart" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
