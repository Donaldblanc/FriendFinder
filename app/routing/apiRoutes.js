var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res){    
        res.json(friends);
      //  console.log(friends);
    });


    app.post("/api/friends", function(req,res) {

        var  match = {
            name:"",
            photo: "",
            fdifference: 1000
        };

        console.log(req.body);

        var userResponses = req.body;
        var userScores = userResponses.scores;

        console.log(userScores);

        var totalDifference = 0;

        var length = friends.length;
        for( var i =0; i < length; i++ ) {
            console.log(friends[i]);
            totalDifference =0

                for(var j =0; j < friends[i].scores[i]; j++){
                    totalDifference += Math.abs( parseInt(userScores[j]) - parseInt(friends[i].scores[j]))

                    if( totalDifference <= match.fdifference ){
                        match.name = friends[i].name;
                        match.photo = friends[i].photo;
                        match.fdifference = totalDifference;

                    }
                }
        }// for

        friends.push(userResponses);

        res.json(match);
    })// post method








}