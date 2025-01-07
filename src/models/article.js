const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    ean: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true

    },
    manufacturer_name: {
        type: String,
        required: true
    },
    iso_certification: {
        type: Boolean,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    fssai: {
        type: mongoose.Schema.Types.Mixed
    }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
