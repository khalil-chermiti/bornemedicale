const Data = require("./data.mongo");

// persist data to mongo
const addData = async data => await Data.create(data);

const getDataByPatientID = async patient_id => {
  return await Data.find({ patient_id: patient_id });
};

const getAllData = async () => await Data.find().limit(10);

module.exports = { addData, getDataByPatientID, getAllData };
