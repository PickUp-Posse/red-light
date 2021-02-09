'use strict';

const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
  name: {type: String, required: true},
  studentID: {type: Number, required: true},
  grade: {type: Number, required: true},
  teacher: {type: String, required: true},
  busRoute: {type: Number, required: false},
  parents: [{type: String, required: true}],
  siblings: [{type: Number, required: false}],
  district: {type: Number, required: false},
  schoolName: {type: String, required: true}
})

const studentModel = mongoose.model('student', studentSchema);

module.exports = studentModel;