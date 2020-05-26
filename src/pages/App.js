import React from "react";
//components
import Main from "./Main";
import Content from "./Content";
//context
import MainContext from "utils/context/MainContext";
// styles components
import Theme from "styles/Theme";

function App() {
  const [showContent, setShowContent] = React.useState(true);

  const toggleMain = () => {
    setTimeout(() => {
      setShowContent(!showContent);
    }, 1000);
  };

  return (
    <Theme>
      <MainContext.Provider value={toggleMain}>
        {showContent ? <Content /> : <Main/>}
      </MainContext.Provider>
    </Theme>
  );
}

export default App;
