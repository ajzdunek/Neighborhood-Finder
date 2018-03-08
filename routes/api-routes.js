var path = require("path");

var db = require("../models");
console.log(db.Neighborhoodgeneral);
// var neighGen = require("../models/neighborhood_general.js");
// var neighDeet = require("../models/neighborhood_detail.js");

module.exports = function(app) {


  app.get("/api/results:id", function(req, res) {

        db.Neighborhoodgeneral.findOne({
          where: {
            Name: req.params.id
          }
          }).then(function(data) {
          res.json(data);
          console.log(res.json(data));
        });
    });
  };