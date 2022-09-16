const Listing = require('../models/listings-model')

//CRUD operations:

// CREATE:
createListing = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Please provide a listing in request body',
        })
    }

    const listing = new Listing(body)

    if (!listing) {
        return res.status(400).json({ success: false, error: err })
    }

    listing
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: listing._id,
                message: 'Listing created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Listing not created!',
            })
        })
}

// UPDATE:

updateListing = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Listing.findOne({ _id: req.params.id }, (err, listing) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Listing not found!',
            })
        }
        
        listing.title = body.title
        listing.address = body.address
        listing.rent = body.rent
        listing.bedrooms = body.bedrooms
        listing.bathrooms = body.bathrooms
        listing.car_parks = body.car_parks
        listing.property_type = body.property_type
        listing.date_available = body.data_available
        listing.amenities = body.amenities
        listing.pets_ok = body.pets_ok
        listing.sharehouse = body.sharehouse
        listing.number_of_flatmates = body.number_of_flatmates

        listing
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: listing._id,
                    message: 'Listing updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Listing not updated!',
                })
            })
    })
}

// DELETE:

deleteListing = async (req, res) => {
    await Listing.findOneAndDelete({ _id: req.params.id }, (err, listing) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!listing) {
            return res
                .status(404)
                .json({ success: false, error: `Listing not found` })
        }

        return res.status(200).json({ success: true, data: listing })
    }).catch(err => console.log(err))
}

// GET BY ID (READ):

getListingById = async (req, res) => {
    await Listing.findOne({ _id: req.params.id }, (err, listing) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!listing) {
            return res
                .status(404)
                .json({ success: false, error: `Listing not found` })
        }
        return res.status(200).json({ success: true, data: listing })
    }).catch(err => console.log(err))
}

// GET (READ):

getListings = async (req, res) => {
    await Listing.find({}, (err, listing) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!listing.length) {
            return res
                .status(404)
                .json({ success: false, error: `Listing not found` })
        }
        return res.status(200).json({ success: true, data: listing })
    }).catch(err => console.log(err))
}

module.exports = {
    createListing,
    updateListing,
    deleteListing,
    getListings,
    getListingById,
}