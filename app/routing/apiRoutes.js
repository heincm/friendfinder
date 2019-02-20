let friends = require('../data/friends')

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        let newFriends = req.body;
        friends.push(newFriends);
        res.json(newFriends);
    });
}