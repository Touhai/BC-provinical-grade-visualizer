// main controller 

let ProvinicalGrades = require('../models/dataModel');

// base API entry point
exports.index = function (req, res) {
    res.json({
        message: "Welcome to the UBC Provinicals grades API, refer to github README for more info https://github.com/Touhai/BC-provinical-grade-visualizer",
    });

}


// get method that returns the grade info for one subject and one populuation.
exports.getGradeOneGender = function (req, res) {
    let fields = "SCHOOL_YEAR SCHOOL_NAME EXAM_SUBJECT -_id AVERAGE_PERCENT SUB_POPULATION MARK_TYPE";
    const query = { SCHOOL_NAME: req.params.school_name, SCHOOL_YEAR: req.params.year, EXAM_SUBJECT: req.params.subject, SUB_POPULATION: req.params.gender }

    ProvinicalGrades.find(query, fields, function (err, data) {
        if (err) {
            res.json({
                message: err,
            })
        } else {
            res.json({
                data
            });
        }

    });
}

// get method that returns the grade info for one subject and ALL population.
exports.getGradeAllGender = function (req, res) {
    let fields = "SCHOOL_YEAR SCHOOL_NAME EXAM_SUBJECT -_id AVERAGE_PERCENT SUB_POPULATION MARK_TYPE";
    const query = { SCHOOL_NAME: req.params.school_name, SCHOOL_YEAR: req.params.year, EXAM_SUBJECT: req.params.subject }

    ProvinicalGrades.find(query, fields, function (err, data) {
        if (err) {
            res.json({
                message: err,
            })
        } else {
            res.json({
                data
            });
        }

    });
}

// get method that returns the grade info for all subjects and all population

exports.getGradeAllSubjects = function (req, res) {
    let fields = "SCHOOL_YEAR SCHOOL_NAME EXAM_SUBJECT -_id AVERAGE_PERCENT SUB_POPULATION MARK_TYPE";
    const query = { SCHOOL_NAME: req.params.school_name, SCHOOL_YEAR: req.params.year };

    ProvinicalGrades.find(query, fields, function (err, data) {
        if (err) {
            res.json({
                message: err,
            })
        } else {
            res.json({
                data
            });
        }

    });
}

// get method that returns the grade info for all subjects and one population

exports.getGradeAllSubjectsOneGender = function (req, res) {
    let fields = "SCHOOL_YEAR SCHOOL_NAME EXAM_SUBJECT -_id AVERAGE_PERCENT SUB_POPULATION MARK_TYPE";

    ProvinicalGrades.find({ SCHOOL_NAME: req.params.school_name, SCHOOL_YEAR: req.params.year, SUB_POPULATION: req.params.gender }, fields, function (err, data) {
        if (err) {
            res.json({
                message: err,
            })
        } else {
            res.json({
                data
            });
        }

    });
}



// get method that returns the grade info for all year for one school.

exports.getGradeAllSubjectsAllYear = function (req, res) {
    let fields = "SCHOOL_YEAR SCHOOL_NAME EXAM_SUBJECT -_id AVERAGE_PERCENT SUB_POPULATION MARK_TYPE";
    const query = { SCHOOL_NAME: req.params.school_name };
    ProvinicalGrades.find(query, fields, function (err, data) {
        if (err) {
            res.json({
                message: err,
            })
        } else {
            res.json({
                data
            });
        }

    });
}


// get method that returns unique school names given a district

exports.getSchoolName = function (req, res) {
    const query = { DISTRICT_NAME: req.params.district };

    ProvinicalGrades.find().distinct("SCHOOL_NAME", query, function (err, data) {
        if (err) {
            res.json({
                message: err,
            })
        } else {
            res.json({
                data
            });
        }

    })
}

// get method that returns the subjects within a school in a year.

exports.getSchoolSubjects = function (req, res) {
    const query = { SCHOOL_NAME: req.params.school_name, SCHOOL_YEAR: req.params.year };
    ProvinicalGrades.find().distinct("EXAM_SUBJECT", query, function (err, data) {
        if (err) {
            res.json({
                message: err,
            })
        } else {
            res.json({
                data
            });
        }

    })
}


exports.getSchoolPopulation = function (req, res) {
    const query = { SCHOOL_NAME: req.params.school_name, SCHOOL_YEAR: req.params.year, EXAM_SUBJECT: req.params.subject };
    ProvinicalGrades.find().distinct("SUB_POPULATION", query, function (err, data) {
        if (err) {
            res.json({
                message: err,
            })
        } else {
            res.json({
                data
            });
        }

    })
}


exports.getAllDistrictNames = function (req, res) {
    const query = {};
    ProvinicalGrades.find().distinct("DISTRICT_NAME", query, function (err, data) {
        if (err) {
            res.json({
                message: err,
            })
        } else {
            res.json({
                data
            });
        }

    })
}


exports.getAllYear = function (req, res) {
    const query = {};
    ProvinicalGrades.find().distinct("SCHOOL_YEAR", query, function (err, data) {
        if (err) {
            res.json({
                message: err,
            })
        } else {
            res.json({
                data
            });
        }

    })
}