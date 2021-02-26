const express = require('express');
const chatRouter = express.Router();

const { getRoom, postRoom, deleteRoom } = require('./chatController');

chatRouter.get('/chat/:id', getRoom);
chatRouter.post('/chat/:id', postRoom);
chatRouter.delete('/chat/:id/delete', deleteRoom);

module.exports = chatRouter;
