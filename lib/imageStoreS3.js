'use strict';
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

function save (name, data, callback) {
  let params = {
    Bucket: 'pizza-luvrs-bucket-01',
    Key: `pizzas/${name}.png`,
    Body: new ArrayBuffer(data, 'base64'),
    ContentEncoding: 'base64',
    ContentType: 'image/png'
  }
  s3.put(params, (err, data) => callback(err, `//s3-sa-east-1.amazonaws.com/pizza-luvrs-bucket-01/${params.Key}`))
}

module.exports.save = save;
