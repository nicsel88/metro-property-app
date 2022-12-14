const Listing = require('../models/listings-model')

// //CRUD operations:

// GET (READ):
// Add req.filter for example, to the Listing.find function to filter directly from the MongoDB.
// See getListingsByID above.
// Also req.sort for sorting functionality.

//SEARCH FUNCTION:
// getListingsbyLocation = async (req, res) => {
//     await Listing.find({}, (err, listing) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }
//         if (!listing.length) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `Listing not found` })
//         }
//         return res.status(200).json({ success: true, data: listing })
//     }).catch(err => console.log(err))
// }


// FILTER:

getListingsByFilter = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide filter parameters in the request body',
        })
    }

    if (req.body.rentMin == "Any") {
        req.body.rentMin = 0
    }

    if (req.body.bedroomsMin == "Any") {
        req.body.bedroomsMin = 0
    }

    if (req.body.bathroomsMin == "Any") {
        req.body.bathroomsMin = 0
    }

    if (req.body.carparksMin == "Any") {
        req.body.carparksMin = 0
    }

    if (req.body.rentMax == "Any") {
        req.body.rentMax = Infinity
    }

    if (req.body.bedroomsMax == "Any") {
        req.body.bedroomsMax = Infinity
    }

    if (req.body.bathroomsMax == "Any") {
        req.body.bathroomsMax = Infinity
    }

    if (req.body.carparksMax == "Any") {
        req.body.carparksMax = Infinity
    }


    if (req.body.propertyType.length == 0) {
        req.body.propertyType = ["All", "House", "Townhouse", "Apartment", "Unit"]
    }

    // if (req.body.amenities.length == 0) {
    //     req.body.amenities = [""]
    // }
    

    console.log(body);

    
    // {district: { $cond:{ if: {$in:[req.body.district, ''] }, then: {$nin: req.body.district}, else: {$in: req.body.district} }}},

    // Using $regex (instead of $in) to solve the problem of error when none is selected (i.e. user wants to search 'All Suburbs'). regex checks if the dropdown option string is contained within the equivalent string in the database listing.

    await Listing.find({
        $and: [
            {rent: { $gte: req.body.rentMin, $lte: req.body.rentMax}},
            {bedrooms: { $gte: req.body.bedroomsMin, $lte: req.body.bedroomsMax}},
            {bathrooms: { $gte: req.body.bathroomsMin, $lte: req.body.bathroomsMax}},
            {car_parks: { $gte: req.body.carparksMin, $lte: req.body.carparksMax}},
            {region: { $regex: req.body.region }},
            {district: { $regex: req.body.district }},
            {suburb: {$regex: req.body.suburb}},
            // {amenities: { $all: req.body.amenities }},
            {property_type: { $in: req.body.propertyType }},
            {pets_ok: { $eq: req.body.petsOk }},
            {suburb: { $regex: req.body.keyword}},
        ]   
    
    }, (err, listings) => {


        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!listings.length) {
            return res
                .status(404)
                .json({ success: false, error: `No listings found matching your search filters` })
        }
        // Could implement quick sort (or other sort) here before returning, but will do on the client instead.
        return res.status(200).json({ success: true, data: listings })
    }).catch(err => console.log(err))
}


// // CREATE:
// createListing = (req, res) => {
//     const body = req.body

//     if (!body) {
//         return res.status(400).json({
//             success: false,
//             error: 'Please provide a listing in request body',
//         })
//     }

//     const listing = new Listing(body)

//     if (!listing) {
//         return res.status(400).json({ success: false, error: err })
//     }

//     listing
//         .save()
//         .then(() => {
//             return res.status(201).json({
//                 success: true,
//                 id: listing._id,
//                 message: 'Listing created!',
//             })
//         })
//         .catch(error => {
//             return res.status(400).json({
//                 error,
//                 message: 'Listing not created!',
//             })
//         })
// }

// // UPDATE:

// updateListing = async (req, res) => {
//     const body = req.body

//     if (!body) {
//         return res.status(400).json({
//             success: false,
//             error: 'You must provide a body to update',
//         })
//     }

//     Listing.findOne({ _id: req.params.id }, (err, listing) => {
//         if (err) {
//             return res.status(404).json({
//                 err,
//                 message: 'Listing not found!',
//             })
//         }
        
//         listing.title = body.title
//         listing.address = body.address
//         listing.rent = body.rent
//         listing.bedrooms = body.bedrooms
//         listing.bathrooms = body.bathrooms
//         listing.car_parks = body.car_parks
//         listing.property_type = body.property_type
//         listing.date_available = body.data_available
//         listing.amenities = body.amenities
//         listing.pets_ok = body.pets_ok
//         listing.sharehouse = body.sharehouse
//         listing.number_of_flatmates = body.number_of_flatmates

//         listing
//             .save()
//             .then(() => {
//                 return res.status(200).json({
//                     success: true,
//                     id: listing._id,
//                     message: 'Listing updated!',
//                 })
//             })
//             .catch(error => {
//                 return res.status(404).json({
//                     error,
//                     message: 'Listing not updated!',
//                 })
//             })
//     })
// }

// // DELETE:

// deleteListing = async (req, res) => {
//     await Listing.findOneAndDelete({ _id: req.params.id }, (err, listing) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }

//         if (!listing) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `Listing not found` })
//         }

//         return res.status(200).json({ success: true, data: listing })
//     }).catch(err => console.log(err))
// }

// // GET BY ID (READ):

// getListingById = async (req, res) => {
//     await Listing.findOne({ _id: req.params.id }, (err, listing) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }

//         if (!listing) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `Listing not found` })
//         }
//         return res.status(200).json({ success: true, data: listing })
//     }).catch(err => console.log(err))
// }

// // GET (READ):
// // Add req.filter for example, to the Listing.find function to filter directly from the MongoDB.
// // See getListingsByID above.
// // Also req.sort for sorting functionality.


// getListings = async (req, res) => {
//     await Listing.find({}, (err, listing) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }
//         if (!listing.length) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `Listing not found` })
//         }
//         return res.status(200).json({ success: true, data: listing })
//     }).catch(err => console.log(err))
// }



module.exports = {
    // createListing,
    // updateListing,
    // deleteListing,
    // getListings,
    // getListingById,
    getListingsByFilter,
}