const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const db = require('quick.db');
const config = require('./config.json');
//=================================================================================\\
//=================================================================================\\
client.login(process.env.TOKEN)
 
client.on('ready', () => {
  client.user.setActivity("YouTube!")
  console.log(`Logged in as ${client.user.tag}!`);
});
const log = message => {console.log(` ${message}`);};
require('./util/eventLoader.js')(client);
//=================================================================================\\
//=================================================================================\\
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./Commands/', (err, files) => {
    if (err) console.error(err);
    files.forEach(f => {
        let props = require(`./Commands/${f}`);
      log(`Command:  ${props.help.name}`)
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
}); 
client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./Commands/${command}`);
            client.commands.set(command, cmd);
            cmd.help.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.on("guildMemberAdd", member => {
const role = member.guild.roles.cache.get(db.get(`autorole_${member.guild.id}`))
if(role) {
member.roles.add(role)
}
})
