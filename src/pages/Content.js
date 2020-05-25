import React, { useRef } from "react";
import Sidebar from "components/Sidebar";
import NavBar from "components/NavBar";

export default () => {
  const [toggleSideBar, setToggleSideBar] = React.useState(false);

  const sections = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Resume",
    "Contact",
  ];

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
    <div className="content-container">
      <NavBar setToggleSideBar={setToggleSideBar} />
      <Sidebar
        onClick={scrollTo}
        sections={sections}
        toggleSideBar={toggleSideBar}
        setToggleSideBar={setToggleSideBar}
      />
      {sections.map((sec, index) => (
        <section
          className="section"
          id={sec}
          key={sec}
          ref={(el) => (refs.current[index] = el)}
        >
          {sec}
        </section>
      ))}
    </div>
  );
};
