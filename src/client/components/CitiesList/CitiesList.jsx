import React, { Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/DeleteOutlineRounded";
import { map } from "lodash";
import { connect } from "react-redux";

// redux actions
import { DELETE_CITY, DESELECT_CITY } from "../../redux/actions";

// style
import useStyles from "./citiesList.style";

const CitiesList = ({ cities, deleteCity, deSelect }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} justify="center" className={classes.main}>
      {map(cities, (city) => {
        return (
          <Fragment key={city.id}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Grid container justify="space-between" spacing={2}>
                <Grid item xs={10}>
                  <Typography variant="body1" color="primary">
                    {city.name}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Grid container justify="space-evenly" spacing={5}>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={6}>
                      <DeleteIcon
                        color="primary"
                        onClick={() => {
                          deleteCity(city.id);
                          deSelect(city.name);
                        }}
                        style={{ cursor: "pointer" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}></Grid>
          </Fragment>
        );
      })}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    deleteCity: (id) =>
      dispatch({
        type: DELETE_CITY,
        payload: id,
      }),
    deSelect: (name) =>
      dispatch({
        type: DESELECT_CITY,
        payload: name,
      }),
  };
};

export default connect(mapStateToProps, mapActionToProps)(CitiesList);
