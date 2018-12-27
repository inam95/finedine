import React from "react";
import { Icon } from "semantic-ui-react";
import GoogleMapReact from "google-map-react";
import { objectToArray } from "../../../app/common/util/helpers";

const Marker = () => <Icon name="marker" size="big" color="red" />;

const RestaurantDetailedMap = ({ restaurant }) => {
  const placeLatLng = restaurant && restaurant.placeLatLng && objectToArray(restaurant.placeLatLng);
  const lat = placeLatLng[0];
  const lng = placeLatLng[1];
  const center = [lat, lng];
  const zoom = 10;
  return (
    <React.Fragment>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyBeEzBoEcZ4UO2iqBK55gfJoXfdx_ZFVa8"
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={lat} lng={lng} />
      </GoogleMapReact>
    </React.Fragment>
  );
};

export default RestaurantDetailedMap;
