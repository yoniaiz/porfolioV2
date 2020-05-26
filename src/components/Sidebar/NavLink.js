import React, { Fragment } from "react";

export default ({ item: { description, ref, sub } }) => {
  return (
    <Fragment>
      <div >{description}</div>
      {sub && <div className="sub">{sub}</div>}
    </Fragment>
  );
};
