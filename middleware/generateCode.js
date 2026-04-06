const crypto = require("crypto");

const generateCode = () => {
  return Math.random().toString(36).substring(2, 6);
};

module.exports = generateCode;