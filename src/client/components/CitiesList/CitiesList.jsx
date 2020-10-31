import React, { Fragment, useState } from "react";
import { Grid, Typography, TextField } from "@material-ui/core";
import EditIcon from "@material-ui/icons/EditOutlined";
import DeleteIcon from "@material-ui/icons/DeleteOutlineRounded";
import { map } from "lodash";
import { connect } from "react-redux";

// redux actions
import { DELETE_CITY, EDIT_CITY } from "../../redux/actions";

// style
import useStyles from "./citiesList.style";

const CitiesList = ({ cities, deleteCity, editCity }) => {
  const classes = useStyles();

  // state
  const [edit, setEdit] = useState({});

  const onEnter = (e) => {
    if (e.key === "Enter") {
      editCity(e.target.name, e.target.value);
      setEdit({ ...edit, [e.target.name]: false });
    }
  };

  return (
    <Grid container spacing={3} justify="center" className={classes.main}>
      {map(cities, (city) => {
        return (
          <Fragment key={city.id}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Grid container justify="space-between" spacing={2}>
                <Grid item xs={10}>
                  {!edit[city.id] ? (
                    <Typography variant="body1" color="primary">
                      {city.name}
                    </Typography>
                  ) : (
                    <TextField
                      name={city.id}
                      label="City Visited"
                      variant="outlined"
                      defaultValue={city.name}
                      onKeyPress={onEnter}
                      fullWidth
                      autoFocus
                      size="medium"
                    />
                  )}
                </Grid>
                <Grid item xs={2}>
                  <Grid container justify="space-evenly" spacing={5}>
                    <Grid item xs={6}>
                      {!edit[city.id] && (
                        <EditIcon
                          style={{ cursor: "pointer" }}
                          onClick={() => setEdit({ ...edit, [city.id]: true })}
                        />
                      )}
                    </Grid>
                    <Grid item xs={6}>
                      <DeleteIcon
                        onClick={() => deleteCity(city.id)}
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
    editCity: (id, name) =>
      dispatch({
        type: EDIT_CITY,
        payload: { id, name },
      }),
  };
};

export default connect(mapStateToProps, mapActionToProps)(CitiesList);
