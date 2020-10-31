import React from "react";
import Leaflet from "leaflet";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { connect } from "react-redux";
import { map } from "lodash";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const CitiesMap = ({ cities }) => (
  <Map center={[parseFloat(cities[0].lat), parseFloat(cities[0].lon)]} zoom={5}>
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
);

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
  };
};

export default connect(mapStateToProps)(CitiesMap);
