const express = require('express');
const mongoose = require('mongoose');

const uri = process.env.mongo_uri
const ConnectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB cluster');
    } catch (error) {
        console.error('Error connecting to MongoDB cluster:', error);
    }
};
module.exports = ConnectDB;