'use strict';

require('@code-fellows/supergoose');

const Collection = require('../src/models/dataCollection');
let student = new Collection();

describe('Student Model', () => {
  it('can create a new student item', async () => {
    let obj = {
      name: 'bob',
      studentID: 1,
      grade: 5,
      teacher: "Mr. Smith",
      busRoute: 2,
      parents: ['Sue', 'Bill'],
      siblings: [2, 3],
      district: 25,
      schoolName: 'Cascade'
    };
    let record = await student.create(obj);
    expect(record.name).toEqual('bob');
  })
  it('can update an object', async () => {
    let obj = {
      name: 'bob',
      studentID: 1,
      grade: 5,
      teacher: "Mr. Smith",
      busRoute: 2,
      parents: ['Sue', 'Bill'],
      siblings: [2, 3],
      district: 25,
      schoolName: 'Cascade'
    };
    let record = await student.create(obj);
    record.schoolName = 'Mountain View';
    let updatedRecord = await student.update(record._id, record)
    expect(updatedRecord.schoolName).toEqual('Mountain View');
  });
  it('can get one record', async () => {
    let obj = {
      name: 'greg',
      studentID: 1,
      grade: 5,
      teacher: "Mr. Smith",
      busRoute: 2,
      parents: ['Sue', 'Bill'],
      siblings: [2, 3],
      district: 25,
      schoolName: 'Cascade'
    };
    let record = await student.create(obj);
    let id = await student.get(record._id);
    expect(id.name).toBe('greg');
  })
  it('can get all records', async () => {
    let objects = await student.get();
    expect(objects.length).toEqual(3);
  })
  it('can delete a record', async () => {
    let obj = {
      name: 'gary',
      studentID: 1,
      grade: 5,
      teacher: "Mr. Nguyen",
      busRoute: 2,
      parents: ['Sue', 'Bill'],
      siblings: [2, 3],
      district: 25,
      schoolName: 'Cascade'
    };
    let record = await student.create(obj);
    let objectsCurrent = await student.get();
    // console.log(objectsCurrent);
    await student.delete(record._id);
    let objects = await student.get();
    // console.log(objects);
    expect(objectsCurrent.length).toBe(4);
    expect(objects.length).toBe(3);
  })
})