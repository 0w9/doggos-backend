const express = require('express');
const express_config = require("./config/express_config.json")

const queryFiles = require("./routes/queryFiles");
const createFiles = require("./routes/createFiles");
const editFiles = require("./routes/editFiles");

const app = express()

app.use(express.json());
app.use('/files/:id', queryFiles);

app.listen( express_config.port, () => {
    console.log( `server started at http://localhost:${ express_config.port }` );
} );

// http://localhost:3331/admin/edit