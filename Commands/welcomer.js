 module.exports = {
     help: {
       name: 'welcomer',
       description: 'Set the welcomer channel.',
       usage: '!welcomer <channel>',
       category: "admin"
     },
   conf: {
     enabled: true,
     ownerOnly: false,
     permission: "ADMINISTRATOR",
     aliases: []
   },
     run: async(client, message, args, p) => {   
const {MessageEmbed} = require('discord.js'),
db = require('quick.db'),
channel = message.mentions.channels.first()
if(!channel) return message.reply('you need to mention channnel!')
db.set(`welcome_${message.guild.id}`, channel.id),
message.reply(`successfully set welcome channel to ${channel}`)
     } 
    
}
