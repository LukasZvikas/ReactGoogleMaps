const mongoose = require("mongoose");

const { Schema } = mongoose;

const mapSchema = new Schema({
  title: String,
  city: String,
  origin: {
    lat: Number,
    lng: Number
  },
  waypoints: [{ lat: Number, lng: Number }],
  destination: {
    lat: Number,
    lng: Number
  }
});



const Maps = mongoose.model("maps", mapSchema);

module.exports = Maps;