var mongoose = require('mongoose');
var uri ="mongodb+srv://adeepgarg4:a8196044188@cluster0.f5vu7.mongodb.net/learn?retryWrites=true&w=majority";
var uri = "mongodb+srv://taskapp:<password>@cluster0.cesuh.mongodb.net/learn?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

