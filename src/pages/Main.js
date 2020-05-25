import React from "react";
//components
import { Rectangle, Profile, Text } from "components/main";

//styled components
import Main from "styles/Main";

export default () => {
  return (
    <div className="main-section noselect">
      <Rectangle />
      <Profile />
      <Text />
    </div>
  );
};
