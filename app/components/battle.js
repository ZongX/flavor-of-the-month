var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;


function PlayerPreview (props) {
  return (
    <div>
      <div className="column">
        <img className="avatar" src={props.avatar} alt={'Avatar for ' + props.username}/>
        <h2 className="username">@{props.username}</h2>
      </div>
      <button className="reset" onClick={props.onReset.bind(null, props.id)}>Reset</button>

    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired
}

class PlayerInput extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var value = event.target.value;

    this.setState(() => {
      return {
        username: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.props.id, this.state.username);
  };

  render(){
    return (
      <form className="column" onSubmit={this.handleSubmit}>
        <label className="header" htmlFor="username">
          {this.props.label}
        </label>
        <input
          id="username"
          placeholder="Github username"
          type="text"
          autoComplete="off"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button className="button" type="submit" disabled={!this.state.username}>Submit</button>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

class Battle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneName: "",
      playerTwoName: "",
      playerOneImg: null,
      playerTwoImg: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, username){
    this.setState(() => {
      var newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Img'] = "https://github.com/" + username + ".png?size=200";
      return newState;
    });
  }

  handleReset(id) {
    this.setState(() => {
      var newState = {};
      newState[id + 'Name'] = '';
      newState[id + 'Image'] = null;
      return newState;
    });
  }

  render() {
    var match = this.props.match;
    var playerOneName = this.state.playerOneName;
    var playerTwoName = this.state.playerTwoName;
    var playerOneImg = this.state.playerOneImg;
    var playerTwoImg = this.state.playerTwoImg;

    return (
      <div>
        <div className="row">
          {this.state.playerOneName ?
            <PlayerPreview
              avatar={playerOneImg}
              username={playerOneName}
              onReset={this.handleReset}
              id='playerOne'
            />
            : <PlayerInput id="playerOne" label="Player One" onSubmit={this.handleSubmit} />
          }

          {this.state.playerTwoName ?
            <PlayerPreview
              avatar={playerTwoImg}
              username={playerTwoName}
              onReset={this.handleReset}
              id='playerTwo'
            />
            : <PlayerInput id="playerTwo" label="Player Two" onSubmit={this.handleSubmit} />
          }
        </div>

      {playerOneImg && playerTwoImg &&
        <Link className="button" to={{ pathname: match.url + '/results', search: 'playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName }}>
          Battle
        </Link>
      }

      </div>
    )
  }
}

module.exports = Battle;
