const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.connect('mongodb+srv://vinaycodes1:vcode5@movie-rating.zexe0gx.mongodb.net/movies');
}

module.exports = {connectDB};
