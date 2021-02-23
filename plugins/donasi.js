let handler = async m => m.reply(`
╭─〘 DONASI 〙
│ • Cukup Subscribe dan Like Channel YouTube
│   Ragam Cara Sederhana
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
