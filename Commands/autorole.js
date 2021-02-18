module.exports = {
     help: {
       name: 'autorole',
       description: 'Gives role to new members',
       usage: '!autorole <role>',
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
db = require('quick.db')
const role = message.mentions.roles.first()
if(!role) return message.reply("you need to mention role!")
db.set(`autorole_${message.guild.id}`, role.id),message.channel.send(`Successfully set autorole: ${role}`)
     } 
    
}
