const mongoose = require('mongoose')

const ClientSchema = new mongoose.schema({
    full_name: String,
    email: String,
    pwd: String,
    contact: String,
    photo_id: binData,
    news_subs_status: String,
    subscribtions:Object,
    counselors: {
        "$ref": 'employee',
        '$id': ObjectId
    },
    lead_score: Integer,
})

const ClientschemaModel = mongoose.model('client', ClientSchema)
module.exports = ClientschemaModel