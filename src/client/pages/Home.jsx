import React, { Fragment, useState } from "react";
import { Typography, TextField, Grid } from "@material-ui/core";
import { connect } from "react-redux";

// style
import useStyles from "./home.style";

// components
import CitiesList from "../components/CitiesList/CitiesList";

// reducer action
import { ADD_CITY } from "../redux/actions";

const Home = ({ addCity }) => {
  const classes = useStyles();

  // state
  const [name, setName] = useState("");

  const onChangeName = (e) => {
    setName(e.currentTarget.value);
  };

  const onEnter = (e) => {
    if (e.key === "Enter") {
      addCity(name);
      setName("");
    }
  };

  return (
    <Fragment>
      <div className={classes.main}>
        <Typography color="primary" variant="h1">
          ADD CITY
        </Typography>
      </div>
      <Grid
        container
        direction="row"
        justify="center"
        spacing={3}
        style={{ marginTop: "2%" }}
      >
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <TextField
            id="add"
            name="city"
            value={name}
            label="City Visited"
            variant="outlined"
            onChange={onChangeName}
            onKeyPress={onEnter}
            fullWidth
            autoFocus
            size="medium"
          />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={12}>
          <CitiesList />
        </Grid>
      </Grid>
    </Fragment>
  );
};

const mapActionToProps = (dispatch) => {
  return {
    addCity: (city) =>
      dispatch({
        type: ADD_CITY,
        payload: city,
      }),
  };
};

export default connect(null, mapActionToProps)(Home);
