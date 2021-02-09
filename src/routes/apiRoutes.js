'use strict';

const express = require('express');
const router = express.Router();
const Collection = require('../models/dataCollection');
const student = new Collection();
console.log('made it to the routes page');
console.log('this is the collection', Collection);
console.log('this is the student', student);


console.log('Made it to API routes page!');

router.get('/', handleGetAll);
router.get('/:id', handleGetOne);
router.post('/', handleAdd);
router.put('/:id', handleUpdate);
router.delete('/:id', handleDelete);

async function handleGetAll(req, res) {
  console.log('made it in the get all function');
  try {
    console.log('this is the request', req);
    let allStudents = await student.get();
    res.status(200).json(allStudents);
 } catch (e) {
   throw new Error(e.message)
 }
}
async function handleGetOne(req, res) {
 try {
  console.log('this is the request', req);
    const id = req.params.id;
    let oneStudent = await student.get(id)
    res.status(200).json(oneStudent);
 } catch (e) {
   throw new Error(e.message)
 }
}
async function handleAdd(req, res) {
 try {
  console.log('this is the request', req);
    let obj = req.body;
    let newRecord = await student.create(obj);
    res.status(201).json(newRecord);
 } catch (e) {
   throw new Error(e.message)
 }
}
async function handleUpdate(req, res) {
 try {
  console.log('this is the request', req);
    const id = req.params.id;
    const obj = req.body;
    let updatedRecord = await student.update(id, obj)
    res.status(200).json(updatedRecord);
 } catch (e) {
   throw new Error(e.message)
 }
}
async function handleDelete(req, res) {
 try {
    let id = req.params.id;
    let deletedRecord = await student.delete(id);
    res.status(200).json(deletedRecord);
 } catch (e) {
   throw new Error(e.message)
 }
}

module.exports = router;