// specify your database models/schemas here.
// then import them in the app.js file
// you can create more database models by creating your own files like this.

const mongoose = require('mongoose');

// Define a reusable schema object
const mySchema = new mongoose.Schema({
 

 
StudentName: {
     type: String,
      required: true
},
Pinno:{
   type: String,
      required: true,
      unique: true
},

BioMetricId: {
      type: Number,
      required: true,
      unique: true
},

Branch: {
     type: String,
     required: true
},
Semister:{
     type: String,
     required: true,
},

Year:{
     type: String,
     required: true
},
StudentContact:{
     type: Number,
     required: true,
     
},
AadharNO:{
     type: Number,
     required: true,
     unique: true
},
Email:{
     type: String,
     required: true,
     
},
Address:{
     type: String,
     required: true
},
FatherName:{
     type: String,
     required: true
}, 
FatherNum:{
     type: Number,
     required: true
},
DOB:{
        type: Date,
        required: true
},

});

// Create a model for each collection
// const Collection1 = mongoose.model('Collection1', mySchema);
// const Collection2 = mongoose.model('Collection2', mySchema);
const dbConnect = require('../db/dbConnect.js');
 const db =  dbConnect();

const Student = mongoose.model('Student', mySchema);
const DCE = mongoose.model('DCE', mySchema);
const DCME = mongoose.model('DCME', mySchema);
const DECE = mongoose.model('DECE', mySchema);
const DEEE = mongoose.model('DEEE', mySchema);
const DME = mongoose.model('DME', mySchema);
const DPT = mongoose.model('DPT', mySchema);

//  const Student = mongoose.model('Student', studentSchema)
module.exports = { Student,DCME,DME,DCE,DECE,DPT,DEEE };
