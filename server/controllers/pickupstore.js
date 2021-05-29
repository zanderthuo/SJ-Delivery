const Pickup = require('../models/pickupstores');

 /**
   * @desc Get all pickup_stores
   * @route Get /api/v1/pickup_stores
   * @param  { None } - Request object
   * @return { get all pickup stores } res
   * @access Public
   */

 exports.getPickStores = async (req, res, next) => {
     try {
         const pickup_stores = await Pickup.find();
         
         return res.status(200).json({
            success: true,
            count: pickup_stores.length,
            data: pickup_stores
         });
     } catch (err) {
        //  console.error(err)
         res.status(500).json({ error: 'Sever error'})
     }
}


 /**
   * @desc Creates a pickup_stores
   * @route POST /api/v1/pickup_stores
   * @param  { None } - Request object
   * @return { get all users } res
   * @access Public / pickup agent and admin
   */

exports.addPickStore = async (req, res, next) => {
    try {
        // console.log(req.body)
        const pickup_store = await Pickup.create(req.body);

        return res.status(201).json({
          success: true,
          data: pickup_store
        });

    } catch (err) {
        // console.error(err)
        if (err.code === 11000) {
            return res.status(400).json({ error: 'This pick store already exists' })
        }
        res.status(500).json({ error: 'Server error' })
    }
 }

  /**
   * @desc Creates a pickup_stores
   * @route POST /api/v1/delete/pickup_store
   * @param  { _id } - Request object
   * @return { deleted } res
   * @access Public
   */


    /**
   * @desc Creates a pickup_stores
   * @route POST /api/v1/update/pickup_store
   * @param  { _id } - Request object
   * @return { update } res
   * @access Public
   */

