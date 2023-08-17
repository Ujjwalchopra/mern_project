const asyncHandler= require('asyncHandler');

// @desc Get goals
// @routes Get /api/goals
// @access private
const getgoals = asyncHandler(async(req, res) => {
  res.status(200).json({ message: "get goals" });
});

// @desc set goals
// @route post /api/goals
// @access private
const setgoals = asyncHandler(async(req, res) => {
 if(!req.body.text){
  res.status(400)
  throw new Error('please add a text field');
 }
  res.status(200).json({message: req.body.text})
});

// @desc update goals
// @routes put /api/goals
// @access private
const updategoals = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `update goals ${req.params.id}` });
});

// @desc delete goals
// @routes delete /api/goals
// @access private
const deletegoals = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `delete goals ${req.params.id}` });
});

module.exports = {
  getgoals,
  setgoals,
  updategoals,
  deletegoals,
};
