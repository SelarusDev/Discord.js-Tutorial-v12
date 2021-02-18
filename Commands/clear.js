module.exports = {
     help: {
       name: 'clear',
       description: 'Clear messages from current channel.',
       usage: '!clear <amount>',
       category: "admin"
     },
   conf: {
     enabled: true,
     ownerOnly: false,
     permission: "MANAGE_MESSAGES",
     aliases: []
   },
     run: async(client, message, args, p) => {   
const {MessageEmbed} = require('discord.js'),
amount = args[0]
if(!amount) return message.reply('you have to specify number between 1-100')
if(amount < 1 || amount > 100) return message.reply('you have to specify number between 1-100')       
message.channel.bulkDelete(amount).then(d => message.reply(`successfully deleted **${d.size}** messages!`))
     } 
    
}


