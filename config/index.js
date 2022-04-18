const mongoose = require('mongoose');

mongoose.db1 = mongoose.createConnection("mongodb://localhost:27017/cmpemp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose;