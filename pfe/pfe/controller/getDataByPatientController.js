const { getDataByPatientID } = require("../models/data.model.js");

async function getDataByPatient(req, res) {
  const patientID = req.body.patient_id;

  if (!patientID)
    return res.status(400).json({ message: "please provide a phone number" });

  const data = await getDataByPatientID(patientID);

  if (!data) return res.status(400).json({ message: "no data" });

  return res.status(200).json({ data: data });
}
module.exports = {
  getDataByPatient,
};
