var path = require("path");

var db = require("../models");
console.log(db.Neighborhoodgeneral);
// var neighGen = require("../models/neighborhood_general.js");
// var neighDeet = require("../models/neighborhood_detail.js");

module.exports = function(app) {
  app.get("/api/results/:name", function(req, res) {
    console.log("req", req.params.name);
    db.Neighborhoodgeneral.findOne({
      where: {
        Name: req.params.name
      }
//     }).then(function(general) {
//       // console.log("general", general)
//       // res.json(general);
//       db.Neighborhooddetail.findAll({
//         where: {
//           // need to figure out how to call this on foreign key once tables associated
//           FKNeighborhoodsGen: general.dataValues.id
//         }
//       }).then(function(details) {
//         var data = {
//           nameData: general,
//           detailData: details
//         };
//         console.log("details", details);
//         console.log(data);
//         res.json({ data: data });
  
      }).then(function (general) {
        // console.log("general", general)
        // res.json(general);
        db.Neighborhooddetail.findAll({
          where: {
            // need to figure out how to call this on foreign key once tables associated
            NeighborhoodgeneralId: general.dataValues.id
          }
        }).then(function (details) { 
            var data = {
              nameData: general,
              detailData: details
            }
            console.log("details", details);
            console.log(data);
            res.json({ data: data })
          });
        });
      });
    });
  });

app.post('/api/users', function(req, res) {
  var userName = req.body.Email;
  console.log("User's email address is ", userName);
  res.send(userName);
});

};
