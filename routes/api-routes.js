
//The API routes for express backend

let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        message: "welcome to the API landing page, refer to github for more info."
    })
})

//Importing controllers 

let gradeController = require('../controllers/gradeController')

router.route('/grades').get(gradeController.index);

//Grade retrival API
router.route('/grades/:school_name/:year/:subject').get(gradeController.getGradeAllGender)
router.route('/grades/:school_name/:year/:subject/:gender').get(gradeController.getGradeOneGender)
router.route('/grades/:school_name/:year').get(gradeController.getGradeAllSubjects)
// router.route('/grades/:school_name/:year/:gender').get(gradeController.getGradeAllSubjectsOneGender)
router.route('/grades/:school_name/').get(gradeController.getGradeAllSubjectsAllYear)


/* internal use */

//School info retrival API
router.route('/info/').get(gradeController.getAllDistrictNames);
router.route('/info/year').get(gradeController.getAllYear);
router.route('/info/:district').get(gradeController.getSchoolName);
router.route('/info/:school_name/:year').get(gradeController.getSchoolSubjects);
router.route('/info/:school_name/:year/:subject').get(gradeController.getSchoolPopulation);

//exporting the routes

module.exports = router;