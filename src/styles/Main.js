import styled from "styled-components";
const Main = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: ${(props) => props.theme.backgroundColor};
  font-family: ${(props) => props.theme.fonts[0]};
`;

export default Main;
