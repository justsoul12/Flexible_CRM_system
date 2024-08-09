const mongoose = require('mogoose');

const profileSchema = new mongoose.schema({
    full_name:String,
    email: String,
    contact: String,
    pwd: String,
    photo_id: binData,
    meeting_id: String,
    role : {
        '$ref': 'roles',
        '$role': role,
    },


})
const profileModel = mongoose.model('profile', profileSchema )
module.exports = profileModel