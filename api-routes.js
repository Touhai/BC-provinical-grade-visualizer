
//Init express router

let router = require('express').Router();

router.get('/', function(req,res){
    res.json({
        status: "Hello world",
        message: "Sample message"
    })
})

//importing controller

let gradeController = require('./gradeController')
router.route('/grades').get(gradeController.index);
router.route('/test').get(gradeController.test)

//exporting the routes

module.exports = router;