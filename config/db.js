console.log('db.js')
const { bold } = require('colors');
const mongoose=require('mongoose');

const dbConnect = async() => {
    const conn= await mongoose.connect(process.env.DB_URI);

    console.log(`Mongodb connected: ${conn.connection.host}`.cyan.underline);

}
module.exports=dbConnect;