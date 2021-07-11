const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    console.log("This is from react router");
})

module.exports = router;