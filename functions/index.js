'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();


exports.mvvm = functions.https.onRequest((request, response) => {

    if (request.method !== 'GET') {
        return response.status(500).send({result:500})
    }

    const photos = require('./unsplash');

    response.status(200).send(photos);


});
