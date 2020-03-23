let messages = [];
let id = 0;

module.exports = {
  createMessage: (req, res, next) => {
    const { text, time } = req.body;
    messages.push({id,text,time})
    id++;
    res.status(200).send(messages);
  },
  returnMessages: (req, res, next) => {
    res.status(200).send(messages);
  },
  updateMessage: (req, res, next) => {
    const {text} = req.body
    const index = messages.findIndex(elem => elem.id == req.params.id);
    messages[index] = {
        id: messages[index].id,
        text: text || messages[index].text,
        time: messages[index].time
    }
    res.status(200).send(messages);
    }
  ,
  deleteMessage: (req, res, next) => {
      const index = messages.findIndex(elem => elem.id == req.params.id)
      messages.splice(index, 1)
      res.status(200).send(messages)
  }
};
