// var path = require("path");

var db = require("../models");
console.log(db.Neighborhoodgeneral);
// var neighGen = require("../models/neighborhood_general.js");
// var neighDeet = require("../models/neighborhood_detail.js");

module.exports = function (app) {


  app.get("/api/results:id", function (req, res) {

    db.Neighborhoodgeneral.findOne({
      where: {
        Name: req.params.id
      }
    }).then(function (general) {
      db.Neighborhooddetail.findAll({
        where: {
          //need to figure out how to call this on foreign key once tables associated
          foreignkey: general.id
        }
      }).then(function (details) { 
          var data = {
            nameData: general,
            detailData: details
          }
          console.log(data);
          res.json({ data: data })
        });
      });
    });
  };
