var mongoose = require("mongoose");
var db = require("../database");
var stuSchema = new mongoose.Schema({
  name: String,
  rollNo: Number,
});
stuTable = mongoose.model("students", stuSchema);

module.exports = {
  fetchData: function (callback) {
    var stuData = stuTable.find({});
    stuData.exec(function (err, data) {
      if (err) throw err;
      return callback(data);
    });
  },
};
