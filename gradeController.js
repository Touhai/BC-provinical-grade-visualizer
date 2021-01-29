// main controller 

let ProvinicalGrades = require('./dataModel');

// adding controller for GET endpoint.
// returns all the data in the database
// DANGEROUS DONT USE IT LOL
exports.index = function (req, res) {
    ProvinicalGrades.get(function(err, grades){
        if(err){
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

exports.test = function (req,res){
    res.json({
        message:"api testing, it works",
    })
}