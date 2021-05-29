const express = require('express')
const router = express.Router()

const { requireSignin, isAuth, isAdmin } = require('../../controllers/auth')
const { role } = require('../../controllers/role')
const { addAgent, getAgents, agentRequest, approveRequest, rejectRequest,  readAgent, updateAgent, deleteAgent } = require('../../controllers/agent')
const { userSignupValidator } = require('../../validator/validators')

router.post('/agents/addagent', addAgent)
router.get('/agents/allagents', getAgents)
router.delete('/agents/delete/:agentId', deleteAgent)
router.post('/agents/agent-request', agentRequest)
router.put('/agents/approve-request/:agentId', approveRequest)
router.put('/agents/reject-request/:agentId', rejectRequest)

module.exports = router