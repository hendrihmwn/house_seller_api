const express = require('express');
const houseRoute = require('./houses');
const locationRoute = require('./location');
const typeRoute = require('./type');
const statusRoute = require('./status');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/houses',
    route: houseRoute,
  },
  {
    path: '/location',
    route: locationRoute,
  },
  {
    path: '/type',
    route: typeRoute,
  },
  {
    path: '/status',
    route: statusRoute,
  },
  {
    path: '/',
    route: router.get('/', function(req, res, next) {
      res.send('connected');
    }),
  },
  
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


module.exports = router;
