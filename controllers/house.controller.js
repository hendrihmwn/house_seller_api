const httpStatus = require('http-status');
const { ApiError, successTemplate, catchAsync, pick } = require('../config/util');
const { housesLogic } = require('../logics/index');

const queryHouses = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await housesLogic.queryHouse(filter, options);
  res.send(successTemplate(result));
});

const getHouse = catchAsync(async (req, res) => {
  const user = await housesLogic.getHouseById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  res.send(successTemplate(user));
});



module.exports = {
  queryHouses,
  getHouse
};
