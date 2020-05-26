import React from "react";

export default ({ skill }) => {
  return (
    <div className="pipe-container">
      <h1 className="skill">{skill.name}</h1>
      <div className="pipe" />
      <div className="skills-images-container">
        {skill.images.map((image) => (
          <img src={image} />
        ))}
      </div>
    </div>
  );
};
