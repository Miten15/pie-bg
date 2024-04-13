const State = require("../models/State");

module.exports ={
    addState: async (req, res, next) => {
        const { country, description, imageUrl, region, popular } = req.body;

        try {

            const newState = new State({
                country,
                description,
                imageUrl,
                region,
                popular
            });

            await newState.save();

            res.status(201).json({ status: true })
        } catch (error) {
            return next(error)
        }

    },

    
    getStates: async (req, res, next) => {
        try {
            const states = await State.find({},{country: 1, _id: 1, imageUrl: 1} )

            res.status(200).json({states})
        } catch (error) {
            return next(error)
        }
    },
    
}