const express = require('express');
const mongoose = require('mongoose');

const uri = process.env.mongo_uri
const ConnectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://fetihgirma1:7WQkxcVMo96vTecH@ssgi.chzb3m8.mongodb.net/CRM_system');
        console.log('Connected to MongoDB cluster');
    } catch (error) {
        console.error('Error connecting to MongoDB cluster:', error);
    }
};
module.exports = ConnectDB;
