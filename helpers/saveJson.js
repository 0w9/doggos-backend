const db = require('../helpers/initDB');

async function saveJson(data) {
    const res = await db.collection('files').add(data);

    if(res.id) {
        return res.id;
    } else {
        return false;
    }
}

module.exports = saveJson;