# Software Requirements

## Vision

* What is the vision of this product? 
  * Provide quick and simple communication from the pick up line to each classroom.
* What pain point does this project solve?
  * Pick up line congestion and amount of time it takes parents to complete parent pick up during the pandemic.
* Why should we care about your product?
  * It will make it safer and faster for kids to get connected with their parents after school is out

## Scope
  1. IN -
    a. Will store student data such as student name, parent name, teacher/classroom, siblings, student ID, bus route (if exists), school district number, school name/phone number, authorized pick-up people.
    b. When the student's parent or bus arrives and changes status in the app, the student name will change to yellow to indicate bus, or green to indicate parent. The student will be able to know they're "green today" and watch for it to change to green.
    c. Administrator will be able to add/update/delete students from database when students move to/away from school, change grades/teacher, and moves to different bus route.
    d. Will allow principal/teacher to update the student status (parent arrives, child leaving classroom, child in parent care).
    e. If parent doesn't have id or qr code, the student is able to be looked up and student name is transmitted to all teachers.
  2. OUT -
    a. This app will not be used to take attendance

### MVP
* What will your MVP functionality be? 
  * It will be a web based app that will store student data, and allow the principal to communicate with classrooms.

### Stretch
* What stretch goals are you going to aim for?
  * Will notify all students in a bus route at the same time that their bus is ready for them.
  * Given one student id, send out request to all siblings
  * Admin authorization/log in (limit people who can add/delete students)
  * Mobile app (iOS and Andriod)
  * QR code: parent/bus would attach to window, be scanned by principal, and teacher notified
  * Pick-up permissions: pop up with authorized parents to pick up student when student selected
  * Ability for teacher to communicate with principal: i.e. student absent
  * Allow for multiple principal devices: multiple people scanning cars/busses

## Functional Requirements
  1. Admin can add/delete students from database
  2. Teachers can update their student entries

### Data Flow
* Parent arrives at the school, and either qr code is scanned or principal asks parent for student id. Principal enters student id into search box, presses submit, and the teacher is notified that the selected student is able to come outside. When the student leaves the classroom, the teacher clicks on their name, which notifies the principal that the child is on the way to the pick-up area. When the student gets into the parent car, their name is clicked on again to indicate the student is in the parent's custody. Same process for a bus pick up, though all students are notified via name change of yellow that their bus is ready for them.

## Non-functional Requirements
  1. Security is a stretch goal (likely to hit): administrator and teachers will have log in that will give them specific access to the fucntions they need, while other people will be unable to use the app and access the sensitive information within.
  2. Usability: Simple/intuitive interface that will communicate with the correct teachers.
  3. Testability: We will be aiming for 90% test coverage.
