import styled from "styled-components";
import { getPercentToRgb } from "helpers/functions";

const TextStyle = styled.div`
  z-index: 100000;
  color: rgb(${(props) => getPercentToRgb(props.color)});
  font-size: ${(props) => props.fontSize}px;
`;

export default TextStyle;
