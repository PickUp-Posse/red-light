'use strict';
module.exports = (req, res, next) => {
  console.log(`METHOD: ${req.method}, PATH: ${req.path}`);
  next();
};