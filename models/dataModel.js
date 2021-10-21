// Handles the model for mongoose

const mongoose = require('mongoose');

let ProvinicalExam = module.exports = mongoose.model('prov', new mongoose.Schema({}), 'data');

module.exports.get = function (callback, limit) {
    ProvinicalExam.find(callback).limit(limit);
}
