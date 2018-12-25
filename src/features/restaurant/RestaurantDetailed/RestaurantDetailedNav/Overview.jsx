import React from "react";

// import { Icon } from "semantic-ui-react";

import "../RestaurantDetailed.css";

const Overview = ({ restaurant }) => {
  return (
    <div>
      <h1>Overview</h1>
    </div>
    // <div className="nav_detail">
    //   <div className="block">
    //     <div className="phone_number">
    //       <h2>Phone Number</h2>
    //       <h3>{restaurant.phone}</h3>
    //       {restaurant.tbr && <p>Tabel booking recommended</p>}
    //     </div>
    //     <div className="cuisines">
    //       <h2>Cuisines</h2>
    //       {restaurant.cuisines &&
    //         restaurant.cuisines.map(cuisine => (
    //           <div key={cuisine}>
    //             <Icon name="angle double right" style={{ color: "#25a14e" }} />
    //             <p>{cuisine}</p>
    //           </div>
    //         ))}
    //     </div>
    //   </div>
    //   <div className="block">
    //     <div className="avg_cost">
    //       <h2>Average Cost</h2>
    //       <p>Rs{restaurant.avg_cost}.00 for two people (approx.)</p>
    //     </div>
    //     <div className="address">
    //       <h2>Address</h2>
    //       <p>{restaurant.address.street}</p>
    //     </div>
    //   </div>
    //   <div className="block">
    //     <div className="more_info">
    //       <h2>More Info</h2>
    //       {restaurant.additionalInfo &&
    //         restaurant.additionalInfo.map(info => (
    //           <div key={info}>
    //             <Icon name="angle double right" style={{ color: "#25a14e" }} />
    //             <p>{info}</p>
    //           </div>
    //         ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Overview;
