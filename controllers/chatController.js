const ChatMessage = require('../models/ChatMessage');

// Controller to send a new message
exports.sendMessage = async (req, res) => {
  try {
    const { sender, receiver, message } = req.body;
    const newMessage = new ChatMessage({ sender, receiver, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
};

// Controller to get all messages between two users
exports.getMessages = async (req, res) => {
    try {
      const { sender, receiver } = req.query;
      console.log('Sender:', sender);
      console.log('Receiver:', receiver);
  
      const messages = await ChatMessage.find({ sender, receiver }).sort({ timestamp: 1 });
      console.log('Messages:', messages);
  
      res.status(200).json({ success: true, messages });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Failed to fetch messages' });
    }
  };
  
// Controller to delete a message
exports.deleteMessage = async (req, res) => {
  try {
    const messageId = req.params.id;
    await ChatMessage.findByIdAndDelete(messageId);
    res.status(200).json({ success: true, message: 'Message deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to delete message' });
  }
};
