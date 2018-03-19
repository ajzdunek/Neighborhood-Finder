var path = require("path");
var db = require("../models");


module.exports = function (app) {
    /** On completion of survey, runs get route to db for neighborhood information
     * @requires Express
     * @param {string} path - Express path
     * @param {callback} cb - function takes in req and res and will return json data
     */
  app.get("/api/results/:name", function (req, res) {
    console.log("req get hood", req.params.name);
    db.Neighborhoodgeneral.findOne({
      where: {
        Name: req.params.name
      }
    }).then(function (general) {
      db.Neighborhooddetail.findAll({
        where: {
          NeighborhoodgeneralId: general.dataValues.id
        }
      }).then(function (details) {
        var data = {
          nameData: general,
          detailData: details
        };
        res.json({ data: data });
      });
    });
  });
    /** On user login, runs get route to db to see if the user email exists
     * @requires Express
     * @param {string} path - Express path
     * @param {callback} cb - function takes in req and res and will return json data
     */
  app.get("/api/users/:email", function (req, res) {
    console.log("user", req.params.email);
    db.user.findAll({
      where: {
        Email: req.params.email
      }
    }).then(function (data) {
      res.json(data);
    });

    /** On user login, if email does not exist, post route to db adds user email
     * @requires Express
     * @param {string} path - Express path
     * @param {callback} cb - function takes in req and res and will return json data
     */
    app.post("/api/users/:email", function (req, res) {
      console.log("req post", req.params.email)
      db.user.create(
        {
          Email: req.params.email
        }).then(function (email) {
          res.json(email);
        });
    });

    /** On click of save neighborhood, runs put route to db to update users saved neighborhood
     * @requires Express
     * @param {string} path - Express path
     * @param {callback} cb - function takes in req and res and will return json data
     */
  app.put("/api/users/:email", function (req, res){
    console.log("req hood", req.body.hood);
    console.log("req email", req.params.email);
    db.user.update(
      {
        Saved: req.body.hood
      },
        {
          where: {
            Email: req.params.email
          }

        }).then(function (user) {
          res.end();

        })
    })

  })
};
