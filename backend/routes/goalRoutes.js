const { json } = require('body-parser');
const express= require('express');
const router= express.Router();
const {getgoals,setgoals,updategoals, deletegoals} = require('../controller/goalController');

router.get('/',getgoals);

 router.post('/',setgoals);

 router.put('/:id',updategoals);

 router.delete('/:id', deletegoals);

 
module.exports= router;
