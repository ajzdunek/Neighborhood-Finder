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
        };
        console.log("details", details);
        console.log(data);
        res.json({ data: data });
      });
    });
  });
  // Check to see if email exists in the db
  app.get("/api/users/:email", function (req, res) {
    console.log("user", req.params.email);
    db.user.findAll({
      where: {
        Email: req.params.email
      }
    }).then(function (data) {
      res.json(data);
    });



    // Post new email to db
    // app.post("/api/users", function(req, res) {
    //   var userName = req.body.Email;
    //   console.log("User's email address is ", userName);
    //   res.send(userName);
    // });

    // POST route for saving a new User
    app.post("/api/users/:email", function (req, res) {
      console.log("req", req.params.email)
      db.user.create(
        {
          Email: req.params.email
        }).then(function (email) {
          res.json(email);
        });
    });

    // POST route for saving a new favorite neighborhood    //Double check this
    // app.post("/api/users/", function(req, res) {
    //   if(  db.Users.findOne())

    //   db.Users.Saved.create(req.body).then(function(neighborhood) {
    //     res.json(neighborhood);
    //   });
    // });

  // PUT route for updating favorite neighborhood
  app.put("/api/users/:hood", function (req, res){
    console.log("req", req.body.email)
    db.user.update(
      {
        Saved: req.params.hood
      },
        {
          where: {
            Email: req.body.email
          }

        }).then(function (user) {
          res.end();

        })
    })

  })
};
