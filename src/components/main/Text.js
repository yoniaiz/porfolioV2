import React from "react";
import TextStyle from "styles/TextStyle";

export const Text = () => {
  return (
    <div className="main-text-container">
      <h1 className="main-title">Welcome to my porfolio</h1>
      <div className="main-sub-title">
        <h2>Im Yonatan - Full stack developer </h2>
        <div className="continue-button">
          <span>To the site</span>
          <span className="arrow">&#8594;</span>
          <div className="circ"></div>
        </div>
      </div>
    </div>
  );
};
