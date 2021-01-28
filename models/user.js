const mongoose = require('mongoose'),
      {Schema} = mongoose;

const userSchema = new Schema({
    googleID: String,
    name:Object,
    emails:Array,
    photos:Array,
    gender:String,
    provider:String
});

mongoose.model('quick-S_users', userSchema);
