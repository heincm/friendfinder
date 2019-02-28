let friends = require('../data/friends')

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        let bestMatch = {
            name: "",
            url: "",
            scoreDifference: Infinity,
        }

        let userData = req.body;
        let userScores = userData.scores
        let difference = 0;

        for (let i = 0; i < friends.length; i++) {
            let currentFriend = friends[i]

            for (let j = 0; j < currentFriend.scores.length; j++) {
                difference += Math.abs(parseInt(currentFriend.scores[j]) - parseInt(userScores[j]));
            }

            if (difference <= bestMatch.scoreDifference) {
                bestMatch.name = currentFriend.name;
                bestMatch.url = currentFriend.url;
                bestMatch.scoreDifference = difference;
            }
            difference = 0;
        }

        friends.push(userData);
        res.json(bestMatch);

    });
}