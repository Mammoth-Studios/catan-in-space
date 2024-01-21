const router = require('express').Router();

// ROUTE /api/test
router.get("/", async (req, res) => {
    try {
        res.status(200).json({message: "Get request to test route was Successful"});
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;