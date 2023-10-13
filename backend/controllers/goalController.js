
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get Goals' })
}


// @route   POST /api/goals
// @access  Private
const createGoal = (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('body.text is missing')
  }

  res.status(200).json({ message: 'Goal Created' })
}


// @route   PUT /api/goals
// @access  Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Goal ID ${req.params.id} Updated` })
}


// @route   DELETE /api/goals
// @access  Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Goal ID ${req.params.id} Deleted` })
}



module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal
}