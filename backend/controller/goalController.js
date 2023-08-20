const asyncHandler= require('express-async-handler');
const Goal= require('../models/goalModel');

// @desc Get goals
// @routes Get /api/goals
// @access private
const getgoals = asyncHandler(async(req, res) => {
  const goals= await Goal.find();
  res.status(200).json(goals);
});

// @desc set goals
// @route post /api/goals
// @access private
const setgoals = asyncHandler(async(req, res) => {
 if(!req.body.text){
  res.status(400)
  throw new Error('please add a text field');
 }

 const goal= await Goal.create(
    {
        text:req.body.text,
    },
 )
  res.status(200).json(goal)
}); 

// @desc update goals
// @routes put /api/goals
// @access private
const updategoals = asyncHandler(async(req, res) => {
    const goal= await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('Goal not found');
    }
  const updategoal= await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true, 
  })

  res.status(200).json(updategoal);
});

// @desc delete goals
// @routes delete /api/goals
// @access private
const deletegoals = asyncHandler(async(req, res) => {
   const goal= await Goal.findById(req.params.id);
   if(!goal){
    res.status(400);
    throw new Error("goal not found");
   }

 await goal.deleteOne();

  res.status(200).json({id: req.params.id });
});

module.exports = {
  getgoals,
  setgoals,
  updategoals,
  deletegoals,
};
