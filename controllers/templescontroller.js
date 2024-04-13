const Temple = require("../models/Temples");

module.exports={
    addTemple: async (req,res,next) => {
        const {title, img,des,contact,address, city,country,pincode} = req.body;

        try {

            const newTemple = new Temple({
                title, img,des,contact,address, city,country,pincode
            });

            await newTemple.save();

            res.status(201).json({ status: true })
        } catch (error) {
            return next(error)
        }

    },

     
    getTemples: async (req, res, next) => {
        try {
            const Temples  = await Temple.find({},{country: 1, _id: 1, img: 1} )

            res.status(200).json({Temples})
        } catch (error) {
            return next(error)
        }
    },
    
    
}
