const Discord = require("discord.js");
const config = require('../config.json');
const db = require("quick.db")
module.exports = message => {
  let bot = true
  let p = config.prefix
  let blacklist = db.get(`blacklist_${message.author.id}`)
  if(!message.guild) return;
  if(message.author.bot) return;
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(p)) return;
  let command = message.content.split(' ')[0].slice(p.length);
  let params = message.content.split(' ').slice(1);

  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
if(blacklist === true) {
  if(message.author.id !== config.owner) return;
  }
    if(bot === false) {
      return;
    }
    if(cmd.conf.enabled === false) {
     return;
    }
  if(cmd.conf.permission) {
    if(!message.member.hasPermission(cmd.conf.permission)) return message.reply(`you need \`${cmd.conf.permission}\` permission to do this`)
  }
    cmd.run(client, message, params, config, p);
  } 
};

