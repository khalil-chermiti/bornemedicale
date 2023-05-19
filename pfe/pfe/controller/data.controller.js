const { addData } = require("../models/data.model");
const Data = require("../models/data.mongo");

async function dataController(req, res) {
  const data = {
    patient_id: req.userID,
    oxy: req.body.oxy,
    temp: req.body.temp,
    tensio: req.body.tensio,
    poid: req.body.poid,
    size: req.body.size,
    cc: req.body.cc,
  };

  try {
    await addData(data);
    res.status(200).json({ message: "data added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
module.exports = {
  dataController,
};
