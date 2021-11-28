const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: 'Please fill up your survey information',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  A1: {
    type: String,

  },
  A2: {
    type: String,
  
  },
  A3: {
    type: String,
  },
  A4:{
    type:String,
  },
  thoughtAuthor: {
    type: String,
    required: false,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
  V1: {
    type: Number,
    default:0,
  },
  V2: {
    type: Number,
    default:0,
  },
  V3: {
    type: Number,
    default:0,
  },
  V4:{
    type: Number,
    default:0,
  },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
