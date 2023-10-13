const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')


// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(
  async (req, res) => {

    const goals = await Goal.find()

    res.status(200).json(goals)
  }
)


// @route   POST /api/goals
// @access  Private
const createGoal = asyncHandler(
  async (req, res) => {

    if(!req.body.text) {
      res.status(400)
      throw new Error('body.text is missing')
    }

    const goal = await Goal.create({
      text: req.body.text
    })

    res.status(200).json(goal)
  }
)


// @route   PUT /api/goals
// @access  Private
const updateGoal = asyncHandler(
  async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
      res.status(400)
      throw new Error(`Goal ID ${req.params.id} not found, failed to update`)
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true // set the new to true to return the document after the update
    })

    res.status(200).json(updatedGoal)
  }
)


// @route   DELETE /api/goals
// @access  Private
const deleteGoal = asyncHandler(
  async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
      res.status(400)
      throw new Error(`Goal ID ${req.params.id} not found, failed to delete`)
    }

    // const deletedGoal = await Goal.deleteOne({ _id: req.params.id})
    // reference https://masteringjs.io/tutorials/mongoose/delete-by-id

    await goal.deleteOne()
    // this is shorter version of deletedGoal above

    res.status(200).json({id: req.params.id, message: `Goal ID ${req.params.id} Deleted` })
  }
)



module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal
}