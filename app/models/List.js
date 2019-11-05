const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let List = new Schema({
  type: {
    type: String,
    enum: ['SKILL', 'PROFILE'],
    tags: { type: [String], index: true }
  },
  value: {
    type: String,
    tags: { type: [String], index: true }
  }
}, {
  collection: 'lists'
})
List.index({type: 1, value: 1}, {unique: true});

List.statics.updateList = async (type, value) => {
  const val = await ListModel.findOne({type, value});
  if (! val) {
    return ListModel.create({type, value});
  }
  return val;
}

List.statics.get = type => ListModel.find({ type });

const ListModel = mongoose.model('List', List);

module.exports = ListModel;