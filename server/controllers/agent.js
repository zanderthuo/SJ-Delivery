const bcrypt = require('bcryptjs')
const crypto = require('crypto')

// models and helpers
const mg = require('../utils/mailgun-services')
const Agent = require('../models/agents')
const Store = require('../models/pickupstores')
const User = require('../models/users')
const role = require('./role')

 /**
   * @desc adds an agent 
   * @route POST /api/v1/agents
   * @param  { None } - Request object
   * @return { get all users } res
   * @access Public
   */

  exports.addAgent = async (req, res, next) => {
    try {
        console.log(req.body)
        const agent = await Agent.create(req.body);

        return res.status(201).json({
          success: true,
          data: agent
        });

    } catch (err) {
        console.error(err)
        if (err.code === 11000) {
            return res.status(400).json({ error: 'This agent already exists' })
        }
        res.status(500).json({ error: 'Server error' })
    }
 }


 /**
   * @desc gets all agents
   * @route POST /api/v1/agents/allagents
   * @param  { None } - Request object
   * @return { get all Agents } res
   * @access Admin
   */

  exports.getAgents = async (req, res, next) => {
    try {
        const agents = await Agent.find();

        console.log(agents)
        
        return res.status(200).json({
           success: true,
           count: agents.length,
           data: agents
        });
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Sever error'})
    }
 }

   /**
   * Get single User id 
   * @route GET /api/v1/agents/:agentId
   * @param  {id}- Request object
   * @return {user info} res
   * @access Admin
   */

exports.agentById = (req, res, next, id) => {
    Agent.findById(id).exec((err, agent) => {
        if (err || !agent) {
            return res.status(400).json({
                error: 'Agent not found'
            });
        }
        req.profile = agent;
        next(); // continue the system flow
    });
};

/**
   * @desc Delete agent
   * @route DELETE /api/v1/agents/delete/:agentId
   * @param  { id } - Request object
   * @return { pickupagent delete } res
   * @access Admin
   */

 exports.deleteAgent = async (req, res) => {
    try {
        const agent = await Agent.deleteOne({ _id: req.params.id })
        
        res.status(200).json({
            success: true,
            message: `Pickupagent has been deleted successfully!`,
            agent
        })
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        })
    }
}

 /**
   * @desc Creates request for user to be  a agent
   * @route POST /api/v1/agents/agent-request
   * @param  { None } - Request object
   * @return { request to be a agents } 
   * @access Public
   */

  exports.agentRequest = async (req, res) => {
    try {
        console.log(req.body)
        const { username, email, first_name, last_name, gender, idnumber, store, current_city } = req.body

        if(!username || !email) {
            return res
           .status(400)
           .json({ error: 'You must enter your username and email.' });
        }

        if(!first_name || !last_name) {
           return res
           .status(400)
           .json({ error: 'You must enter your full name.' });   
        }

        if(!current_city) {
           return res
           .status(400)
           .json({ error: 'You must enter your currrent city.' });   
        }

       // check if agent exist
       const existingPickupagent = await Agent.findOne({ email });
       if(existingPickupagent) {
           return res
           .status(400)
           .json({ error: `This ${email} email address is already in use.` });
       }

       const agent = new Rider({ username, email, first_name, last_name, gender, idnumber, store, current_city })
       //  console.log('agent request details ==>', agent)
       //  save data to agent
        const agentDoc = await agent.save()
       //  console.log('agent request details', agentDoc)
       
       // send response email to user 
       // Todo create a mailgun template
        // await mg.sendEmail(email, 'agent-application')
       
        return res.status(201).json({
           success: true,
           message: `We have received your request! We will reach out to you on your phone number ${email}!`,
           data: agentDoc
         });

    } catch (err) {
        return res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        })
    }
  }

   /**
   * @desc Admin approve request for user to be a agent
   * @route POST /api/v1/agents/agent-approve
   * @param  { Id } - Request object
   * @return { Approved } res
   * @access Admin
   */

exports.approveRequest = async (req, res) => { 
    try {
        const agentId = req.params.agentId
        const query = { _id: agentId }
        const update = { status: 'Approved', isActive: true }
    
        // find rider and update status
        const agentDoc = await Agent.findOneAndUpdate(query, update, {new: true})
        console.log('status changed to approved ==>', agentDoc)
        console.log('check data to create user==>', createAgentUser(
            agentDoc.email,
            agentDoc.first_name,
            agentId,
            req.headers.host
        ))

        await createAgentUser(
            agentDoc.email,
            agentDoc.first_name,
            agentId,
            req.headers.host
        )
    
        res.status(200).json({
            success: true
        })

    } catch (err) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        })
    }

}

 /**
   * @desc Admin reject request for user to be a agent
   * @route POST /api/v1/agents/agent-reject
   * @param  { Id } - Request object
   * @return { Rejected } res
   * @access Admin
   */

  exports.rejectRequest = async (req, res) => {
    try {
        const agentId = req.params.agentId
        
        const query = { _id: agentId }
        const update = { status: 'Rejected' }
 
        // find rider and update status
        await Agent.findOneAndUpdate(query, update, {
            new: true
        })
 
        res.status(200).json({
            sucess: true
        })
     } catch(err) {
         res.status(400).json({
             error: 'Your request could not be processed. Please try again.'
         })
     }
  }


   /**
   * @func createAgentStore from user data
   * @desc create Agent's Store
   * 
   */
    const createAgentStore = async ({ _id, store}) => { 

    }

     /**
   * @func createAgentUser from user data
   * @desc change user role to agent, add user to user table
   * 
   */

const createAgentUser = async (email, first_name, last_name, agent, host) => {
    const firstName = first_name
    const lastName = last_name

    // check if user exist 
    const existingUser = await User.findOne({ email })
    if(existingUser) {
        // query for user Id and update user to rider
        const query = { _id: existingUser._id }
        const update = { agent, role: role.ROLES.PickupAgent }
        const agentDoc = await Agent.findOne({ email })

        // add agent to stores table
        await createAgentStore(agentDoc)

        // send welcome email to rider
        // await mg.sendEmail(email, 'rider-welcome', null, first_name)

        return  User.findOneAndUpdate(query, update, {
            new: true
        })
    } else {
        const buffer = await crypto.randomBytes(48)
        const resetLink = buffer.toString('hex')
        const resetPasswordLink = resetLink

        const user = new User({ 
            email, 
            firstName, 
            lastName, 
            resetPasswordLink, 
            agent, 
            role: role.ROLES.PickupAgent 
        })

        // send agent an email for signup
        await mg.sendEmail(email, 'agent-signup', host, { resetLink, email })
        
        return await user.save()
    }
}