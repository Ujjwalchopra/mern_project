 const express= require('express');
 const dotenv= require('dotenv').config();
 const colors= require('colors');
 const connectDB= require('./config/db');
 const app= express();
 const {errorHandler}= require('./Middleware/errorMiddleware');

 const port= process.env.PORT || 5000;
 

 app.use(express.json());
 app.use(express.urlencoded({extended: false}))

 connectDB();

app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler);

 app.listen(port, (req,res) => {
    console.log(`server started on ${port}`);
 })

