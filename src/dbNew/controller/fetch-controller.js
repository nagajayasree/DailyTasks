var fetchModel = require("../models/fetch-model");

module.exports = {
  fetchData: function (req, res) {
    fetchModel.fetchData(function (data) {
      res.render("student-table", { stuData: data });
    });
  },
};
