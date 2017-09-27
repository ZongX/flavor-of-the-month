var axios = require('axios');

function getProfile (username) {
  return axios.get('https://api.github.com/users/' + username).then((res) => {
    console.log("Hey", res);
    return res.data;
  });
}

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos').then((res) => {
    return res;
  });
}

function getStarCount(repos) {
  console.log("getStarCount", repos);
  return repos.data.reduce((count, repo) => {
    return count + repo.stargazers_count;
  }, 0);
}

function calcScore(profile, repos) {
  var followers = profile.followers;
  console.log("Followers!", followers);
  var totalStars = getStarCount(repos);
  console.log("Stars!", totalStars);

  return (followers * 5 + totalStars * 2);
}

function handleError(error) {
  console.warn(error);
  return null;
}

function getUserData(player) {
  return axios.all([getProfile(player), getRepos(player)]).then((data) => {
    var profile = data[0];
    var repos = data[1];

    return {
      profile: profile,
      score: calcScore(profile, repos)
    }
  });
}

function sortPlayers(players){
  return players.sort((a,b) => {
    return b.score - a.score;
  });
}


module.exports = {

  battle: (players) => {
    return axios.all(players.map(getUserData)).then(sortPlayers).catch(handleError);
  },

  fetchPopularRepos: (language) => {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'
      + language
      + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI).then((res) => {
      return res.data.items;
    });
  }
}
