const mongoose = require('mongoose')

const connectDB = async (userDB, passDB, host='localhost', port=27017) => {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(`mongodb://${userDB}:${passDB}@${host}:${port}/`)
        console.log('Connected to the database')
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

module.exports = connectDB