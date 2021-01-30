
//Init express router

let router = require('express').Router();

router.get('/', function(req,res){
    res.json({
        message:"welcome to the API landing page, refer to github for more info."
    })
})

//importing controller

let gradeController = require('./gradeController')
router.route('/grades').get(gradeController.index);
router.route('/grades/:school_name/:avg').get(gradeController.getGrades)
router.route('/grades/:school_name/:year/:subject/:gender').get(gradeController.getGradesv2)

// router.route()

//exporting the routes

module.exports = router;