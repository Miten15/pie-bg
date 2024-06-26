const mongoose = require("mongoose");

const StateSchema = new mongoose.Schema({
    country: {type: String, require: true},
    description: {type: String, require: true},
    imageUrl: {type: String, require: true},
    region: {type: String, require: true},
    popular: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Place",
        }
    ]

}, {timestamps: true});



module.exports = mongoose.model("State", StateSchema);