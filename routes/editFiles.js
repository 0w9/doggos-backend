var express = require('express');
var router = express.Router({ mergeParams: true });

const editJson = require("../helpers/editJson");


router.post('/', async function (req, res) {
    const data = req.body;
    const target_trait = req.body.trait;
    const new_value = req.body.new;
    const file_id = req.body.file_id;
    
    let response = await editJson(target_trait, new_value, file_id);

    if(response) {
        res.sendStatus(200);
    } else {
        res.send({error: "There was an error editing the JSON."});
    }
    
})

module.exports = router;