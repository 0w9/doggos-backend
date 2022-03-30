const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const firebase_config = require('../config/firebase_config.json');
const serviceAccount = require('../config/firebase_keys.json');

initializeApp({credential: cert(serviceAccount)});

const db = getFirestore();

module.exports = db;