
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
router.route('/test/:school_name/:avg').get(gradeController.test)

//exporting the routes

module.exports = router;