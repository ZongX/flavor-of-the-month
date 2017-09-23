var React = require('react');

class NotFound extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h4>This page isn't available</h4>
        <p>
          The link you followed may be broken, or the page may have been removed
          <br/>
          If you think this is an error with the server, try again later and maybe it'll magically work. Who knows?
        </p>
        <img style={{userSelect:'none'}} src="https://images.vexels.com/media/users/3/142396/isolated/preview/9add3c87ed2e2669de35c7ee53d6606b-sad-emoticon-by-vexels.png"/>
      </div>
    )
  }
}

module.exports = NotFound;
