const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
// slug = require('mongoose-slug-generator');

// mongoose.plugin(slug);

const Schema = mongoose.Schema;
const commentSchema = new Schema({
	rating:{
		type: Number,
		min: 1,
		max: 5,
		required: true
	},
	comment: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	}
},{
	timestamps: true
}

);

const Course = new Schema({
    name: {
      type: String,
      maxLength: 200,
      required: true,
      unique: true
    },
    description: {
      type: String, 
      maxLength: 1000,
      required: true
    },
    videoID: {
      type: String, 
      maxLength: 200
    },
    level: {
      type: String, 
      maxLength: 200
    },
    image: {
      type: String, 
	  maxLength: 200
    },
    category:{
      type: String,
      required: true
    },
    label:{
      type: String,
      required: true
    },
    price:{
      type: Currency
    },
	comments: [commentSchema]
  },  {
    timestamps: true,
  });

module.exports = mongoose.model('Course', Course);
