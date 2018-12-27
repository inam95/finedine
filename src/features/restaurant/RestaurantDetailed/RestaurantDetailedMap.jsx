import React from "react";
import { Icon } from "semantic-ui-react";
import GoogleMapReact from "google-map-react";

const Marker = () => <Icon name="marker" size="big" color="red" />;

const RestaurantDetailedMap = ({ restaurant }) => {
  // const lat = placeLatLng[0];
  // const lng = placeLatLng[1];
  const center = [7, 8];
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
        <Marker lat={7} lng={8} />
      </GoogleMapReact>
    </React.Fragment>
  );
};

export default RestaurantDetailedMap;
