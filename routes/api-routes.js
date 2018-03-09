var path = require("path");



module.exports = function(app) {
  app.get("", function(req, res) {
    res.json();
  })

   app.post("/api/results", function(req, res) {

      var userScores = req.body.scores;
      var scoreNums = userScores.map(function (i) {
        return parseInt(i, 10);
      });

      var scoreArray = [];
      var bestMatch = 0;
  
      for (var i = 0; i < neighborhood.length; i++) {
        var scoreDifference = 0;

      for (var x = 0; x < scoreNums.length; x++) {
        scoreDifference += Math.abs(parseFloat(neighborhood[i].scores[x]) - parseFloat(scoreNums[x]));
      }
    }
    

      var minDifference = (Math.min(...scoreArray));
      if (minDifference === scoreArray[i]){
        var bestMatch = neighborhood[i];
      }

    res.json(bestMatch);
    })
};