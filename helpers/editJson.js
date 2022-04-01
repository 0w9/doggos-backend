
const db = require("./initDB");

async function editJson(target_trait, new_value, file_id) {
    const doc = await db.collection('files').doc(file_id).get();

    if (doc.exists) {

        try {
            const docData = doc.data();

            const index = await docData.attributes.findIndex(element => element.trait_type === target_trait);
            const new_attributes = await docData.attributes;
            new_attributes[index] = {trait_type: target_trait, value: new_value}

            await db.collection('files').doc(file_id).update({
                attributes: new_attributes

                });

            return true;
            
        } catch(e) {
            return false;
        }
}}

module.exports = editJson;