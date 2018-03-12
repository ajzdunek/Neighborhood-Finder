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
    }).then(function(general) {
      // console.log("general", general)
      // res.json(general);
      db.Neighborhooddetail.findAll({
        where: {
          // need to figure out how to call this on foreign key once tables associated
          FKNeighborhoodsGen: general.dataValues.id
        }
      }).then(function(details) {
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
  app.get("api/users/:id", function(req, res) {
    db.Users.findAll({
      where: {
        Email: req.body.email
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  // Post new email to db
  // app.post("/api/users", function(req, res) {
  //   var userName = req.body.Email;
  //   console.log("User's email address is ", userName);
  //   res.send(userName);
  // });

  // POST route for saving a new User
  app.post("/api/users", function(req, res) {
    db.Email.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // POST route for saving a new favorite neighborhood    //Double check this
  app.post("/api/users", function(req, res) {
    db.Saved.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating favorite neighborhood
  app.put("/api/users", function(req, res) {
    db.Users.update(req.body, {
      where: {
        Saved: req.body.Saved
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
