const express = require('express')
const router = express.Router()

const { getPickStores, addPickStore } = require('../../controllers/pickupstore')

router.post('/pickupstores', addPickStore)
router.get('/pickupstores', getPickStores)

module.exports = router;
