const Discord = require("discord.js");
const config = require('../config.json');
const db = require("quick.db")
module.exports = message => {
  let bot = true 
  let p = config.prefix
  if(!message.guild) return;
  let client = message.client;
  if(message.author.bot) return;
  if(!message.content.startsWith(p)) return;
  let command = message.content.split(' ')[0].slice(p.length);
  let params = message.content.split(' ').slice(1);

  let comnd;
  if (client.commands.has(command)) {
    comnd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    comnd = client.commands.get(client.aliases.get(command));
  }
  if (comnd) {
    if(bot === true) {
      if(message.author.id !== config.owner) return; 
    }
    if(comnd.conf.enabled === false) {
     return;
    }
    if(comnd.conf.ownerOnly === true) {
     if(message.author.id !== config.owner) return; 
    }
    comnd.run(client, message, params, p);
  } 
};

