const express = require('express');
const houseRoute = require('./houses');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/houses',
    route: houseRoute,
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
