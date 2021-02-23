let handler = function (m) {
  // this.sendContact(m.chat, '6282217417425', 'Dyonogreen', m)
  this.sendContact(m.chat, '6282217417425', 'Owner Ragam Cara Sederhana', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
