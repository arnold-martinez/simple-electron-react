const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const cnn = await mongoose.connect('mongodb+srv://banriu123:banriu123@cluster0.bvafz.mongodb.net/buglogger?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
            }
        )

        console.log('MongoDB Connected')
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB
