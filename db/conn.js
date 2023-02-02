const mongoose = require('mongoose')

const main = async () => {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect('')
        console.log('Connected to the database')
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

module.exports = main