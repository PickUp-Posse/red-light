'use strict';
const model = require('./student');

class DataCollection {
  constructor() {
    this.model = model;
  }
  get(_id) {
    if (_id) {
      return this.model.findOne({ _id });
    }
    else {
      return this.model.find({});
    }
  }
  create(record) {
    // console.log('record inside collection ', record);
    let newRecord = new this.model(record);
    // console.log('newRecord', newRecord);
    return newRecord.save();
  }
  update(_id, record) {
    return this.model.findByIdAndUpdate(_id, record, { new: true });
  }
  delete(_id) {
    return this.model.findByIdAndDelete(_id);
  }
}
module.exports = DataCollection;