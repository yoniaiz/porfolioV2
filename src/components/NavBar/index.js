import React from "react";
import hamburger from "assets/images/hamburger.svg";

export default ({ setToggleSideBar }) => {
  return (
    <nav className="navbar" data-testid="navbar">
      <div className="details">
        <p>Yonatan Aizenshtein</p>
        <span>Full-stack web developer</span>
        <img
          alt={"hambulger"}
          src={hamburger}
          onClick={() => setToggleSideBar(true)}
        />
      </div>
    </nav>
  );
};
