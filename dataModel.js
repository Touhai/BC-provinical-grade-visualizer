// controller that handles requests and responses to the API endpoints.

const mongoose = require('mongoose');
const fs = require('fs');


let schema = fs.readFileSync("./schema.json");
let data = JSON.parse(schema);


let provinicalExamSchema = mongoose.Schema(data);

let ProvinicalExam = module.exports = mongoose.model('prov', provinicalExamSchema);

module.exports.get = function (callback, limit) {
    ProvinicalExam.find(callback).limit(limit);
}
