const express = require('express')

const ListingController = require('../controllers/listings-controller')

const router = express.Router()

// router.post('/listing', ListingController.createListing)
// router.put('/listing/:id', ListingController.updateListing)
// router.delete('/listing/:id', ListingController.deleteListing)
// router.get('/listing/:id', ListingController.getListingById)
// router.get('/listings', ListingController.getListings)
router.post('/listing/filter', ListingController.getListingsByFilter)

// Colon is used for a variable (in this case, 'id')

module.exports = router