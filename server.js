const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const errorHandler = require('./middleware/errorHandling');
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const countryRouter = require("./routes/country");
const placeRouter = require("./routes/place");
const hotelRouter = require("./routes/hotel");
const reviewRouter = require("./routes/review");
const stateRouter = require("./routes/state");
const templesRouter = require("./routes/temples.js");

const PORT = 5003;
const HOST = "192.168.0.151"; // Replace 'your-ip-address' with your actual IP address

dotenv.config();
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit: "10mb", extended: true}));

app.use(errorHandler);
app.use('/api/', authRouter);
app.use('/api/users', userRouter);
app.use('/api/countries', countryRouter);
app.use('/api/places', placeRouter);
app.use('/api/hotels', hotelRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/state',stateRouter);
app.use('/api/temples', templesRouter);

// Start the server

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
