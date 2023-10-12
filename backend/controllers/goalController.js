// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get Goals' })
}


// @desc    Create goal
// @route   POST /api/goals
// @access  Private
const createGoal = (req, res) => {
  res.status(200).json({ message: 'Goal Created' })
}


// @desc    Update goal
// @route   PUT /api/goals
// @access  Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Goal ID ${req.params.id} Updated` })
}


// @desc    Delete goals
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