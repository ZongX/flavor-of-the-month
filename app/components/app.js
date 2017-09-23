var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Navbar = require('./Navbar');
var Home = require('./Home');
var Battle = require('./Battle');
var Popular = require('./Popular');
var NotFound = require('./NotFound');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/popular' component={Popular} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
