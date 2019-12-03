import absoluteUrl from 'next-absolute-url'
import styled from 'styled-components';
import HomePage from '../components/HomePage'
import HomePageAirBnB from '../components/HomePageAirBnB';

const moment = require('moment');

const AppBackground = styled.div`
  /* Overflow hidden prevents collapsing margins, which causes an infurating error where the background and entire div is pushed down.*/
  overflow: hidden;
  background-color: #fff;
`

class Air extends React.Component {
  static async getInitialProps({ req, query }) {
    const { protocol, host } = absoluteUrl(req)
    const url = `${host}`
    if(url === 'scottieschneider.com' || url === 'www.scottieschneider.com'){
      return {
        url,
        tagline: `Scottie's personal site.`,
      }
    } else if (url === 'sailcoderepeat.com' || url === 'www.sailcoderepeat.com'){
      return {
        url,
        tagline: `Always sailing. Or coding`
      }
    } else if (url === 'hirescottieschneider.com' || url === 'www.hirescottieschneider.com'){
      return {
        url,
        tagline: `Please hire Scottie :)`
      }
    } else {
      return {
        url,
        tagline: `localhost :)`
      }
    }
  }
  state = {
    month: moment().format('MMMM'),
    open: false,
  }
  openBottomSheet = (open) => {
		this.setState({ open });
	};
  render() {
    return (
      <HomePageAirBnB />
    )
  }
}

export default Air;
export { AppBackground };