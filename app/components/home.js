var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1 className="header">
          Flavor of the Month
          <hr/>
        </h1>
        <p>
          Battle languages to see who's the most popular.
        </p>
        <Link className='button' to='/battle'>Battle</Link>
      </div>
    )
  }
}

module.exports = Home;
