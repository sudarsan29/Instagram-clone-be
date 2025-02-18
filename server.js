const express = require('express');
const PORT = 5000;
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const {MONGODB_URL} = require('./config');

global.__basedir = __dirname;
mongoose.connect(MONGODB_URL);

mongoose.connection.on("connected", () => {
    console.log("DB connected");
});

mongoose.connection.on("error", () => {
    console.log("some error while coonecting to DB");
});

require('./models/user_model');
require('./models/post_model');

app.use(cors());
app.use(express.json());

app.use(require('./routes/user_route'));
app.use(require('./routes/post_route'));
app.use(require('./routes/file_route'));


app.listen(PORT, () => {
    console.log("Server Started");
})