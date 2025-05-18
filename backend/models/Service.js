const mongoose = require('mongoose');
const { Schema } = mongoose;
//  Define the schema for the Service model
const serviceSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image:  {
            type: String
        },
    },
    {
        timestamps: true,
    }
);
// Export the model
const Service = mongoose.model('Service', serviceSchema);
module.exports = {
    Service,
    serviceSchema
};