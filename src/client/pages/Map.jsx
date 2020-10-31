import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { connect } from "react-redux";
import { map } from "lodash";

const position = [26.85, 80.916667];

const CitiesMap = ({ cities }) => (
  <Map center={position} zoom={20}>
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
