const mongoose = require("mongoose");

const User = new mongoose.Schema({
  patient_id: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
    default: Date.now,
  },

  oxy: {
    type: Number,
    required: false,
  },
  temp: {
    type: Number,
    required: false,
  },
  tensio: {
    type: Number,
    required: false,
  },
  poid: {
    type: Number,
    required: false,
  },
  size: {
    type: Number,
    required: false,
  },
  cc: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("Data", User);
