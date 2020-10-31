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
import { ADD_CITY } from "../redux/actions";

// cities data
import citiesData from "../utils/dataHandler";

const Home = ({ addCity, history }) => {
  const classes = useStyles();

  // state
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(citiesData());

  const onChangeName = (e) => {
    setName(e.target.value);
    addCity(e.target.value);
    setData(
      data.map((city) => {
        if (city.name === e.target.value.name)
          return { ...city, isSelected: true };
        return city;
      })
    );
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
        </Grid>
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
