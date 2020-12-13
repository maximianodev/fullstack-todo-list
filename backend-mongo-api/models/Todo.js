const mongoose = require('mongoose');  
const UserSchema = new mongoose.Schema({  
  name: String,
  field: String
});
mongoose.model('Todo', UserSchema);

module.exports = mongoose.model('Todo');