module.exports = function (err, req, res, next) {

  // Sometimes, errors come in as an object, others as a string
  try {

    const error = err.message ? err.message : err;
    
    const errorObject = {
      status: 500,
      message: error
    }
    
    res.setHeader('Content-Type', 'application/json'); //from 500Auth.js
    
    res.status(500).json(errorObject);
  } catch (e) {
    throw new Error(e.message)
  }
}
