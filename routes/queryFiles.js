var express = require('express');
var router = express.Router({ mergeParams: true });

const getJson = require("../helpers/getJson");


router.get('/', async function (req, res) {
    const query_id = req.params.id;
    const file = await getJson(query_id);

    if(file) {
        res.send(file);
    } else {
        res.send({error: "File ID not found."})
    }
})

module.exports = router;