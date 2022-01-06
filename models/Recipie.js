const mongoose = require('mongoose');

const RecipieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    directions: {
        type: String,
        required: true
    },
    facts: {
        type: String
    },
    chef: {
        type: String
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

RecipieSchema.index({ title: 'text' });

module.exports = Recipie = mongoose.model('recipie', RecipieSchema);
