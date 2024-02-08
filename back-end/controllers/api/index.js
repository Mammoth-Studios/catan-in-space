const router = require('express').Router();
const testRoutes = require('./testRoutes');


// ROUTE: /api
router.use('/test', testRoutes);

module.exports = router;