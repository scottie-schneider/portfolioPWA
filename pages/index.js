import absoluteUrl from "next-absolute-url";
import styled from "styled-components";
import HomePage from "../components/HomePage";

const moment = require("moment");

const AppBackground = styled.div`
  /* Overflow hidden prevents collapsing margins, which causes an infurating error where the background and entire div is pushed down.*/
  overflow: hidden;
  background-color: #fff;
`;

class Home extends React.Component {
  render() {
    return <HomePage />;
  }
}

export default Home;
export { AppBackground };
