import React from "react";
import MainContext from "utils/context/MainContext";

export const Text = () => {
  const context = React.useContext(MainContext);

  return (
    <div className="main-text-container">
      <h1 className="main-title">Welcome to my porfolio</h1>
      <div className="main-sub-title">
        <h2>Im Yonatan - Full stack developer </h2>
        <div className="continue-button" onClick={context}>
          <span>To the site</span>
          <span className="arrow">&#8594;</span>
          <div className="circ"></div>
        </div>
      </div>
    </div>
  );
};
