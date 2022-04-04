
const db = require("./initDB");

async function editJson(target_trait, new_value, file_id) {

    const doc = await db.doc("/files/CRGJ7yROqi0Ie9myjXHQ").get();
    if (doc.exists) {

        const docData = doc.data();
        console.log(docData);
        const index = await docData.attributes.findIndex(element => element.trait_type === target_trait);
        const new_attributes = await docData.attributes;
        new_attributes[index] = {trait_type: target_trait, value: new_value}

        await db.collection('files').doc(file_id.replace(/\0[\s\S]*$/g,'')).update({
            attributes: new_attributes});

        return true;

    } else {
        return "There is no document.";
}}

module.exports = editJson;