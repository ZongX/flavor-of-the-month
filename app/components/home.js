var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Flavor of the Month: Battle languages to see who's the most popular.</h1>
        <Link className='button' to='/battle'>Battle</Link>
      </div>
    )
  }
}

module.exports = Home;
