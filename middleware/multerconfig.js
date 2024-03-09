const multer = require('multer');
  
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const allowFileType = ['image/png', 'image/jpeg', 'image/jpg'];
    const allowFileSize = 5 * 1024 * 1024; // 5 MB
    
    if (file.size > allowFileSize) {
      cb(new Error("File size is too large"));
      return;
    }
    
    if(!allowFileType.includes(file.mimetype)){
      cb(new Error("This file type is not supported"))
      return;
    }
    
    cb(null, './storage');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

module.exports = {
  storage,
  multer
};
