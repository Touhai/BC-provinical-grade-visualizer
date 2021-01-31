
//Init express router

let router = require('express').Router();

router.get('/', function(req,res){
    res.json({
        message:"welcome to the API landing page, refer to github for more info."
    })
})

//importing controllers 

let gradeController = require('./gradeController')

router.route('/grades').get(gradeController.index);

// Grade retrival API
router.route('/grades/:school_name/:year/:subject').get(gradeController.getGradeAllGender)
router.route('/grades/:school_name/:year/:subject/:gender').get(gradeController.getGradeOneGender)
router.route('/grades/:school_name/:year').get(gradeController.getGradeAllSubjects)
// router.route('/grades/:school_name/:year/:gender').get(gradeController.getGradeAllSubjectsOneGender)
router.route('/grades/:school_name/').get(gradeController.getGradeAllSubjectsAllYear)


/* internal use stuff */

// School info retrival API
router.route('/info/:district').get(gradeController.getSchoolName);
router.route('/info/:school_name/:year').get(gradeController.getSchoolSubjects);

//exporting the routes

module.exports = router;