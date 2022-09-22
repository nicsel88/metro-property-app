const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Listing = new Schema(
    {
        title: { type: String },
        street_address: { type: String },
        suburb: { type: String },
        district: { type: String },
        region: { type: String },
        rent: { type: Number },
        bedrooms: { type: Number },
        bathrooms: { type: Number },
        car_parks: { type: Number },
        property_type: { type: String },
        date_available: { type: String },
        amenities: { type: [String] },
        pets_ok: { type: Boolean },
        sharehouse: { type: Boolean }, 
        number_of_flatmates: { type: Number },
    }
)

module.exports = mongoose.model('listings', Listing)


// {
//     title: { type: String, required: true },
//     address: {
//         street: { type: String, required: true  },
//         suburb: { type: String, required: true  },
//         city: { type: String, required: true  },
//         region: { type: String, required: true },
//     },
//     rent: { type: Number, required: true },
//     bedrooms: { type: Number, required: true },
//     bathrooms: { type: Number, required: true },
//     car_parks: { type: Number, required: true },
//     property_type: { type: String, required: true },
//     date_available: { type: String, required: true },
//     amenities: { type: [String], required: true },
//     pets_ok: { type: Boolean, required: true },
//     sharehouse: { type: Boolean, required: false }, 
//     number_of_flatmates: { type: Number, required: false },
// }
