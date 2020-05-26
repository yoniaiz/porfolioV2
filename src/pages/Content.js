import React, { useRef, Fragment } from "react";
import Sidebar from "components/Sidebar";
import NavBar from "components/NavBar";
import About from "components/About";

import { sections } from "constants/general";
import Skills from "components/Skills";

function generateComponent(name) {
  switch (name) {
    case sections[0]:
      return <About />;
    case sections[1]:
      return <Skills />;
    default:
      return <h1>default</h1>;
  }
}

export default () => {
  const [toggleSideBar, setToggleSideBar] = React.useState(false);

  const refs = useRef([]);

  const scrollTo = (index) => {
    //dynamically add and remove classes on link click
    refs.current.forEach((ref, i) => {
      if (index === i) {
        ref.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  return (
    <div className="content-container" data-testid="content">
      <NavBar setToggleSideBar={setToggleSideBar} />
      <Sidebar
        onClick={scrollTo}
        sections={sections}
        toggleSideBar={toggleSideBar}
        setToggleSideBar={setToggleSideBar}
      />
      {sections.map((sec, index) => (
        <section
          className={`section ${(index + 1) % 2 == 0 ? "bg-green" : ""}`}
          id={sec}
          key={sec}
          data-testid={sec}
          ref={(el) => (refs.current[index] = el)}
        >
          <div className="inner-section">{generateComponent(sec)}</div>
          {index + 1 !== sections.length && (
            <div
              className={`triangle ${
                (index + 1) % 2 == 0
                  ? index + 1 > 2
                    ? "right-down"
                    : "left-down"
                  : index + 1 > 2
                  ? "right"
                  : ""
              }`}
            />
          )}
        </section>
      ))}
    </div>
  );
};
