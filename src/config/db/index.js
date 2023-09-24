const mongoose = require('mongoose');

async function connect(params) {
    try {
        await mongoose.connect('mongodb://localhost:27017/huyit_dev', {
        useNewUrlParser: true,
        useUnifiedTopology: true
        
    });
        console.log('Connect with database successfully!!!');
    } catch (err) {
        console.log('Connect failure!!! ' + err.message);

    }
}


module.exports =  { connect };