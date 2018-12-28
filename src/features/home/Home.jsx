import React from "react";

const Home = ({ history }) => {
  return (
    <div>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted stackable header">
            <img className="ui image massive" src="/assets/logo2.png" alt="logo" />
            <div className="content">
              <h2 style={{ fontFamily: "Original Surfer" }}>FineDine</h2>
            </div>
          </h1>
          <h2>Explore Restaurants</h2>
          <div onClick={() => history.push("/restaurants")} className="ui huge white inverted button">
            Get Started
            <i className="right arrow icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
