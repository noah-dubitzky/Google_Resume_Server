const States = require("../models/states.js");

exports.findStateByName = (req, res) => {
  States.findByName(req.params.stateName, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found state with name ${req.params.stateName}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving state with name " + req.params.stateName
        });
      }
    } else res.send(data);
  });
};