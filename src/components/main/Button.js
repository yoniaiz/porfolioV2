import React from "react";
import MainContext from "utils/context/MainContext";

export default () => {
  const context = React.useContext(MainContext);

  return (
    <div className="continue-button" data-testid="goToSite" onClick={context}>
      <span>To the site</span>
      <span className="arrow">&#8594;</span>
      <div className="circ"></div>
    </div>
  );
};
