// Imports, mostly all the variables up top will be imports required for the site to work properly. depending on the file, different imports are required.
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require("./postRoutes")

// this specifices to the router which api route to follow.
router.use('/users', userRoutes);
router.use("/posts", postRoutes);

module.exports = router;
