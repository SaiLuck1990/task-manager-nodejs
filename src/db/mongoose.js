const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_TEST_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true

});
