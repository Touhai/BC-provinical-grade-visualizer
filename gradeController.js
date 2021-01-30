// main controller 

let ProvinicalGrades = require('./dataModel');

// adding controller for GET endpoint.
// returns all the data in the database
// DANGEROUS DONT USE IT LOL
exports.index = function (req, res) {
    ProvinicalGrades.get(function (err, grades) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success!",
            message: "Data reterived successfully",
            data: grades,
        })
    })

}



exports.test = function (req, res) {
    ProvinicalGrades.find({SCHOOL_NAME: req.params.school_name, AVERAGE_PERCENT: req.params.avg}, function (err, data) {

        if (err) {
            res.json({
                message: err,
            })
        } else {
            res.json({
                result: data
            });
        }

    });
}