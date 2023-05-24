const { getDataByPatientID, getAllData } = require("../models/data.model.js");

async function getAllDataController(req, res) {
  const data = await getAllData();

  if (!data) return res.status(400).json({ message: "no data" });

  return res.status(200).json({ data: data });
}
module.exports = {
  getAllDataController,
};
