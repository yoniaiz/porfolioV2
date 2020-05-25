import styled from "styled-components";
import { getPercentToRgb } from "helpers/functions";

const RectangleStyle = styled.div`
  background-color: rgb(${(props) => getPercentToRgb(props.backgroundColor)});
`;

export default RectangleStyle;
