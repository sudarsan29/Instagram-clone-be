const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profileImg: {
        type: String,
        default: "https://unsplash.com/photos/a-mountain-covered-in-fog-and-trees-on-a-cloudy-day-WX11U7UQxbg"
    }
});

mongoose.model("UserModel", userSchema);