// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://Studentdbms:Studentdbms@cluster0.lmbytsp.mongodb.net/?retryWrites=true&w=majority/C18",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true
// }).then(()=>{
//     console.log(`Database Connected`);
// }).catch((e)=>{
//     console.log(e);
// })
// const {MongoClient} = require('mongodb')
// const url = 'mongodb+srv://Studentdbms:Studentdbms@cluster0.lmbytsp.mongodb.net/?retryWrites=true&w=majority';
// const client = new MongoClient(url);

// async function dbConnect() {
//   let result = await client.connect();
//   let db= result.db('C18');
//   console.log("Database Connected");
//   return db;
  
 
// }
// module.export=dbConnect;


const {MongoClient} = require('mongodb');
const url = 'mongodb+srv://Studentdbms:Studentdbms@cluster0.lmbytsp.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db= result.db('C18');
  
  return db;

  // let response = await collection.find({name:'Ahmed Rafi Uddin'}).toArray();
 
  // console.log(response);
 
}
module.exports=dbConnect;
// const mongoose = require('mongoose');
// const bson = require('bson');

// let dbConnect=mongoose.connect('mongodb+srv://Studentdbms:Studentdbms@cluster0.lmbytsp.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, })
//   .then(() => console.log('Connected to database'))
//   .catch(err => console.error(err));
//   mongoose.set('strictQuery', false);
//   module.exports=dbConnect;