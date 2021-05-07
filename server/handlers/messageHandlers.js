const { nanoid } = require('nanoid');
const lowDb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db/message.json');
const db = lowDb(adapter);

db.defaults({
  messages: [
    {
      messageId: '1',
      userId: '1',
      senderName: ' Bob',
      messageText: 'Lorem ipsum',
      createdAt: '2021-05-06'
    },
    {
      messageId: '2',
      userId: '2',
      senderName: ' NeBob',
      messageText: 'Lorem ipsum2',
      createdAt: '2021-06-06'
    },
  ]
}).write()

module.exports = (io, socket) => {
  const getMessages = () => {
    const messages = db.get('messages').value();
    io.in(socket.roomId).emit('messages', messages)
  }


  function realTime() {
    let realTime;
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;

    realTime = `${hours}:${minutes}:${seconds} `
    return realTime
  }

  const addMessage = (message) => {
    db.get('messages')
      .push({
        messageId: nanoid(8),
        createdAt: realTime(),
        ...message
      })
      .write()

    getMessages()
  }

  const removeMessage = (messageId) => {
    db.get('messages')
      .remove({ messageId })
      .write()

    getMessages()
  }

  socket.on('message:get', getMessages);
  socket.on('message:add', addMessage);
  socket.on('message:remove', removeMessage);
}