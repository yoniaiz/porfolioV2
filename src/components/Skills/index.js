import React from "react";
import SkillPipe from "./SkillPipe";

function importAll(r) {
  return r.keys().map(r);
}

export default () => {
  const skills = [
    {
      name: "Html",
      images: importAll(require.context("assets/images/html")),
    },
    {
      name: "Css",
      images: importAll(require.context("assets/images/css")),
    },
    {
      name: "front",
      images: importAll(require.context("assets/images/front")),
    },
    {
      name: "back",
      images: importAll(require.context("assets/images/back")),
    },
    {
      name: "Languages",
      images: importAll(require.context("assets/images/lang")),
    },
    {
      name: "other",
      images: importAll(require.context("assets/images/other")),
    },
  ];

  return (
    <div className="skills-section">
      <h1 >Skills</h1>
      <div className="pipes">
        {skills.map((skill) => (
          <SkillPipe skill={skill} />
        ))}
      </div>
    </div>
  );
};
