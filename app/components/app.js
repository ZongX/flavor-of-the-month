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
var Results = require('./Results');


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Navbar />
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/battle' component={Battle} />
              <Route path='/battle/results' component={Results} />
              <Route path='/popular' component={Popular} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

module.exports = App;
