import React, { Fragment, useState } from "react";
import {
  Typography,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { connect } from "react-redux";

// style
import useStyles from "./home.style";

// components
import CitiesList from "../components/CitiesList/CitiesList";

// reducer action
import { ADD_CITY, SELECT_CITY } from "../redux/actions";

const Home = ({ addCity, history, selectCity, data, isEmpty }) => {
  const classes = useStyles();

  // state
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeName = (e) => {
    setName(e.target.value);
    addCity(e.target.value);
    selectCity(e.target.value.name);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
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
          <FormControl
            className={classes.formControl}
            style={{ width: "100%" }}
          >
            <InputLabel id="city-visited-label">Select city</InputLabel>
            <Select
              labelId="City Visited"
              id="city-visited"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={name}
              onChange={onChangeName}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {data.map((city) => {
                return (
                  !city.isSelected && (
                    <MenuItem value={city} key={city.name}>
                      {city.name}
                    </MenuItem>
                  )
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          {!isEmpty && (
            <Button
              variant="contained"
              color="inherit"
              size="small"
              className={classes.viewButton}
              startIcon={<VisibilityIcon />}
              onClick={() => history.push("/map")}
            >
              See on map
            </Button>
          )}
        </Grid>
        <Grid item xs={12}>
          <CitiesList />
        </Grid>
      </Grid>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.citiesData,
    isEmpty: state.cities.length === 0 ? true : false,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    addCity: (city) =>
      dispatch({
        type: ADD_CITY,
        payload: city,
      }),
    selectCity: (name) =>
      dispatch({
        type: SELECT_CITY,
        payload: name,
      }),
  };
};

export default connect(mapStateToProps, mapActionToProps)(Home);
