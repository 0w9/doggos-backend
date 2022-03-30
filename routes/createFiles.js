var express = require('express');
var router = express.Router({ mergeParams: true });

const saveJson = require("../helpers/saveJson");


router.post('/', async function (req, res) {
    const data = req.body;
    console.log(data);
    
    let response = await saveJson(data);

    if(response) {
        res.send({id: response});
    } else {
        res.send({error: "There was an error saving the JSON."});
    }
    
})

module.exports = router;