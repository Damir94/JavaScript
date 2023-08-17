const team = {
  _players: [
    {firstName: 'John', lastName: 'Doe', age: 27},
    {firstName: 'Sara', lastName: 'Mckenzie', age: 30},
    {firstName: 'Benji', lastName: 'Wolf', age: 14}
],
  _games: [
    {opponent: "LA", teamPoints: 66, opponentPoints: 77 }, 
    {opponent: "Nicks", teamPoints:55, opponentPoints: 43 }, 
    {opponent: "Dallas", teamPoints: 43, opponentPoints: 67 }
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
    }

    this._players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
    }

    this._games.push(game);
  }
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
team.addGame('Titans', 100, 98);
console.log(team.games);