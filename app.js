// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const dbConnect = require('./db/dbConnect.js');
// const mongoose = require('mongoose');
// const { text } = require('express');

// const studentSchema = new mongoose.Schema({
//   StudentName: { type: String, required: true },
//   Pinno: { type: String, required: true,unique: true },
//   BioMetricId: { type: Number, required: true,unique: true },
//   Branch: { type: String, required: true },
//   Semister: { type: String, required: true },
//   Year: { type: String, required: true },
//   StudentContact: { type: Number, required: true },
//   AadharNO: { type: Number, required: true,unique: true },
//   Email: { type: String, required: true },
//   Address: { type: String, required: true },
//   FatherName: { type: String, required: true },
//   FatherNum: { type: Number, required: true },
//   DOB: { type: Date, required: true },
//   Gender: { type: String, required: true },
// });
// function model(modelName) {
//   const Student = mongoose.model(modelName, studentSchema);
//   console.log(Student);
//   return Student;
// }


// app.use(express.static('public'));

// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.render('index', { title: 'Student Database Management' });
// });

// app.post('/', async (req, res) => {
//   try {
//    const Student1= model(req.body.branch);
//     const db = await dbConnect();
//     const newStudent = new Student1({
//       StudentName: req.body.sname,
//       Pinno: req.body.pin,
//       BioMetricId: req.body.biopin,
//       Branch: req.body.branch,
//       Semister: req.body.sem,
//       Year: req.body.year,
//       StudentContact: req.body.scon,
//       AadharNO: req.body.Aadhar,
//       Email: req.body.email,
//       Address: req.body.address,
//       FatherName: req.body.fname,
//       FatherNum: req.body.fnum,
//       DOB: req.body.dob,
//       Gender: req.body.gender,
//     });
//     // const result = await db.collection(req.body.branch).insertOne(newStudent);
//     // const result = await db.collection(req.body.branch).insertOne(newStudent, { maxTimeMS: 30000 });

//     // const result = await newStudent.save({timeout: 30000});
//     const result = await db.collection(`${Student1}`).insertOne(newStudent, { maxTimeMS: 30000 });

//     console.log('New document inserted');
//     console.log(result);
//     res.status(200).send(`
//       <script>
//         window.location.href = '/admin';
//         alert('Record inserted successfully.');
//       </script>
//     `);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error inserting record');
//   }
// });

// app.get('/services', (req, res) => {
//   res.render('services', { title: 'services' });
// });

// app.get('/aboutus', (req, res) => {
//   res.render('aboutus', { title: 'about us' });
// });

// app.get('/admin', async (req, res) => {
//   try {
//     const db = await dbConnect();
//     const students = await Student.find();
//     res.render('admin', { title: 'Admin', students });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error fetching records');
//   }
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const bson = require('bson');

const dbConnect = require('./db/dbConnect.js');

//   const studentmodel = require('./models/student');
// const mysql = require('mysql'); use this if your are using a mysql database
// const mongoose = require('mongoose'); use this if your are using a mongoose database

const { Student } = require('./models/student');
const { DCME } = require('./models/student');
function model(branch) {
  let Model;
  switch (branch) {
    case 'DCME':
      Model = DCME;
      break;
    case 'DCE':
      Model = DCE;
      break;
    case 'DECE':
      Model = DECE;
      break;
    case 'DEEE':
      Model = DEEE;
      break;
    case 'DME':
      Model = DME;
      break;
    case 'DPT':
      Model = DPT;
      break;
    default:
      return res.status(400).send('Invalid branch');
  }
  console.log(Model);
  return Model;
}
// // ...

// Get the appropriate model based on the branch value

// importing the model of the student from models directory



//server static files from the pubilc directory
app.use(express.static('public'));


// Configure EJS as the view engine
app.set('view engine', 'ejs');

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {

  res.render('index', { title: 'Student Database Management' });
});









app.post('/', async (req, res) => {


  try {


    const db = await dbConnect();
    // let Model=model(req.body.branch);

    const newDocument = {
      StudentName: req.body.sname,
      Pinno: req.body.pin,
      BioMetricId: req.body.biopin,
      Branch: req.body.branch,
      Semister: req.body.sem,
      Year: req.body.year,
      StudentContact: req.body.scon,
      AadharNO: req.body.Aadhar,
      Email: req.body.email,
      Address: req.body.address,
      FatherName: req.body.fname,
      FatherNum: req.body.fnum,
      DOB: req.body.dob,
      Gender: req.body.gender
    }
    // const newDocument1 = bson.serialize(newDocument);
    const result1 = await db.collection(req.body.branch).find({
      $or: [
        { Pinno: req.body.pin },
        { AadharNO: req.body.Aadhar },
        { BioMetricId: req.body.biopin }
      ]
    }).toArray();
    console.log(result1);
    if (result1.length > 0) {
      console.log("already exist");
      res.redirect("/adminLogin");
      // res.render('adminLogin');
      // res.status(400).send(`
      //   <script>
      //   alert("already exist");
      //   window.location.href = '/adminLogin';
          
      //   </script>
      // `);

    }
    else {
      const result = await db.collection(req.body.branch).insertOne(newDocument);

      // const result = await newDocument1.save();
      console.log(result);
      console.log('New document inserted');

      // req.body.myForm.reset();


      // res.redirect('/admin');
      // res.render('services', { title: 'services' });
      // res.status(200).send(`
      //   <script>
      //   const form = document.getElementById('myForm').reset();
      //   // window.location.href = 'adminLogin';
      //     alert("record inserted successfully);
          
      //   </script>
      // `);
      res.render('adminLogin');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error inserting record');
  }
});
app.post('/adminLogin', async (req, res) => {


  try {


    const db = await dbConnect();
    // let Model=model(req.body.branch);

    
      
    
    
    // const newDocument1 = bson.serialize(newDocument);
    const result1 = await db.collection('Admin').find({UserName: req.body.email,Password: req.body.psw,}).toArray();
    console.log(result1);
    if (result1.length > 0) {
      console.log("login successful");
      res.redirect('/homepage');
      

    }
    else {
    console.log("login failed");
    res.redirect('/adminLogin');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error inserting record');
  }
});

app.get('/adminLogin', function(req, res) {
  res.render('adminLogin');
  // res.send('in adminLogin');
});

app.get('/homepage', (req, res) => {
  res.render('homepage');
});

app.get('/aboutus', (req, res) => {
  res.render('aboutus', { title: 'about us' });
});

app.get('/admin', (req, res) => {
  res.render('admin', { title: 'Admin' });
});


// Start the server on localhost at port 3000
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});