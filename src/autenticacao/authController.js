const jwt = require("jsonwebtoken");
const secret = require('../../config/jwtSecret');

exports.authenticate = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['authorization'].split(" ")[1];
    if (token) {
      try {
        const data = (this.decodeToken(token));
        if (data) {
          req.username = data.username;
          next();
        } else {
          res.status(401).send();
        }
      } catch (error) {
        res.status(500).send(error.message);
      }
    } else {
      res.status(401).send();
    }
};

exports.authorizeByUsername = (req, res, next) => {
    const username = req.username;
    if (username) {
      const reqUsername = req.params.username;
      if (username === reqUsername) {
        next();
      } else {
        res.status(401).send();
      }
    } else {
      res.status(400).send();
    }
};

exports.decodeToken = (token) => {
    return jwt.verify(token, secret.secret);
};