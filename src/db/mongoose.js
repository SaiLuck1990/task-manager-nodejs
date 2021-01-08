const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_DB_PROD_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true

});
