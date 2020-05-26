import React from "react";
//components
import { Rectangle, Profile, Text } from "components/main";

export default () => {
  return (
    <div className="main-section noselect" data-testid="main">
      <Rectangle />
      <Profile />
      <Text />
    </div>
  );
};
