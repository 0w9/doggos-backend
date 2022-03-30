const db = require('../helpers/initDB');

async function getJson(id) {
    const file = db.collection('files').doc(id);
    const doc = await file.get();

    if(!doc.exists) {
        return false;
    } else {
        return doc.data();
    }
}

module.exports = getJson;