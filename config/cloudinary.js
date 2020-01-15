const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

var storage = cloudinaryStorage({
  cloudinary,
  folder: 'thunder-waste', // The name of the folder in cloudinary 
  allowedFormats: ['jpg', 'png'],
  transformation: [{ width: 250, height: 250, crop: "limit" }],
  filename: function (req, file, cb) { 
    cb(null, file.originalname); // The file on cloudinary -> same name as the original file name 
  } 
  
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;