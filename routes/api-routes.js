var path = require("path");

var db = require("../models");
console.log(db.Neighborhoodgeneral);
// var neighGen = require("../models/neighborhood_general.js");
// var neighDeet = require("../models/neighborhood_detail.js");

module.exports = function (app) {


  app.get("/api/results/:name", function (req, res) {
    console.log("req", req.params.name);
      db.Neighborhoodgeneral.findOne({
        where: {
          Name: req.params.name
        }
  
      }).then(function (general) {
        console.log("general", general.ID)
        res.json(general);
        // db.Neighborhooddetail.findAll({
        //   where: {
            // need to figure out how to call this on foreign key once tables associated
        //     foreignKey: general.ID
        //   }
        // }).then(function (details) { 
        //     var data = {
        //       nameData: general,
        //       detailData: details
        //     }
        //     console.log(data);
        //     res.json({ data: data })
        //   });
        });
      });
    };