const fs=require('fs');
const mongoose=require('mongoose');
const colors=require('colors');
const dotenv=require('dotenv');

//Load env variables
dotenv.config({path:'./config/config.env'});

//Load models
const Bootcamp = require('./models/Bootcamp');

//Connect to DB
mongoose.connect(process.env.DB_URI);

//Read JSON
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`,'utf-8'));

//Import into DB
const importdata = async () =>{
    try{
        await Bootcamp.create(bootcamps);
        console.log('Data imported..',green.inverse);
        process.exit();
    }catch(err){
        console.log(err);

    }
}

//Delete data
const deletedata = async () =>{
    try{
        await Bootcamp.deleteMany();
        console.log('Data destroyed..'.red.inverse);
        process.exit();
    }catch(err){
        console.log(err);

    }
}

if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
}