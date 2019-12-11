import SearchAirBnB from '../components/SearchAirBnB';

const moment = require('moment');


class Search extends React.Component {
  state = {
    month: moment().format('MMMM'),
    open: false,
  }

  render() {
    return (
      <SearchAirBnB />
    )
  }
}

export default Search;