import React, { Fragment } from "react";
import Leaflet from "leaflet";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { connect } from "react-redux";
import { map } from "lodash";
import { Button, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// style
import useStyles from "./map.style";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const CitiesMap = ({ cities, history }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Map center={[22, 78.9629]} zoom={5} style={{ zIndex: "1" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {map(cities, (city) => {
          return (
            <Marker
              position={[parseFloat(city.lat), parseFloat(city.lon)]}
              key={city.id}
            >
              <Popup>{city.name}</Popup>
            </Marker>
          );
        })}
      </Map>

      <Button
        variant="contained"
        color="inherit"
        size="small"
        startIcon={<ArrowBackIcon color="primary" />}
        onClick={() => history.push("/")}
        className={classes.button}
      >
        <Typography color="primary" variant="body1">
          Go Back
        </Typography>
      </Button>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
  };
};

export default connect(mapStateToProps)(CitiesMap);
