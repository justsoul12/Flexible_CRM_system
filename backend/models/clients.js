const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
    ClerkUser_id: {type:String, required: true},
    full_name: String,
    email: String,
    pwd: { type: String, required: false},
    contact: { type: String, required: false},
    photo_id: { type: String, required: false},
    news_subs_status: { type: String, required: false},
    // subscribtions:Object,
    // counselors: {
    //     "$ref": 'employee',
    //     '$id': ObjectId
    // },
    // lead_score: Integer,
})

const ClientschemaModel = mongoose.model('client', ClientSchema)
module.exports = ClientschemaModel