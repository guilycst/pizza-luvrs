'use strict';

const fs = require('fs');

module.exports.save = (name, data, callback) => {
  let fileName = '//s3-sa-east-1.amazonaws.com/pizza-luvrs-bucket-01/pizzas/' + name + '.png';

  fs.writeFile(__dirname + '/..' + fileName, data, 'base64', (err) => {
    callback(err, fileName);
  });
};
