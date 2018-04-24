// Load required packages
const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({

    nombre : { type: String, required: true },

    apellido:  { type: String, required: true },

    dni : [{ type: String, required: true }],

    createdOn : { type: Date, default: Date.now }

});

module.exports = mongoose.model('Test', TestSchema);