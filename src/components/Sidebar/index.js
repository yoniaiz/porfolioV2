import React, { Fragment, useRef } from "react";
import NavLink from "./NavLink";
import Scrollspy from "react-scrollspy";

import { useOnClickOutside } from "utils/useClickOutside";

export default ({ onClick, sections, toggleSideBar, setToggleSideBar }) => {
  const ref = useRef(null);

  let navSections = sections.map((item, index) => ({
    description: item,
    func: () => onClick(index),
  }));

  navSections = [
    ...navSections,
    {
      description: "Resume",
      func: () => alert("Resume"),
    },
  ];

  useOnClickOutside(ref, () => setToggleSideBar(false));

  return (
    <Fragment>
      <div className={`sidebar ${toggleSideBar ? "show" : "hidden"}`} ref={ref}>
        <div className="nav-item profile">
          <div>Yonatan Aizenshtein</div>
          <div className="sub">Full stack developer</div>
        </div>
        <Scrollspy items={sections} currentClassName="active-nav" offset={-250}>
          {navSections.map((item, index) => (
            <li
              className="nav-item link"
              onClick={item.func}
              key={index}
              role="li"
              data-testid={`link-${item.description}`}
            >
              <NavLink item={item} />
            </li>
          ))}
        </Scrollspy>
      </div>
      <div className={`blur-background ${toggleSideBar ? "show" : ""}`} />
    </Fragment>
  );
};
