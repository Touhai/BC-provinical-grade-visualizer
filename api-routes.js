
//Init express router

let router = require('express').Router();

router.get('/', function(req,res){
    res.json({
        status: "Hello world",
        message: "Sample message"
    })
})

//exporting the routes

module.exports = router;