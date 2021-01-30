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



exports.getGrades = function (req, res) {
    ProvinicalGrades.find({ SCHOOL_NAME: req.params.school_name, AVERAGE_PERCENT: req.params.avg }, function (err, data) {
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

// get method that returns the raw data in JSON.
exports.getGradesv2 = function (req, res) {
    ProvinicalGrades.find({ SCHOOL_NAME: req.params.school_name, SCHOOL_YEAR: req.params.year, EXAM_SUBJECT: req.params.subject, SUB_POPULATION: req.params.gender  }, function (err, data) {
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