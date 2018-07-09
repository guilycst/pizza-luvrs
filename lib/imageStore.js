'use strict';

const fileStore = require('./imageStoreFile');
const fileStoreS3 = require('./imageStoreS3');

function saveImage (name, base64String, callback) {
  let imageData = base64String.split('data:image/png;base64,')[1];
  fileStoreS3.save(name, imageData, callback);
}

module.exports.saveImage = saveImage;
