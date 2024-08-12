const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.mongo_uri || 'mongodb+srv://fetihgirma1:7WQkxcVMo96vTecH@ssgi.chzb3m8.mongodb.net/CRM_system'
const ConnectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB cluster');
    } catch (error) {
        console.error('Error connecting to MongoDB cluster:', error);
    }
};
module.exports = ConnectDB;
