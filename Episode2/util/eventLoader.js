const eventFetch = (event) => require(`../events/${event}`);
module.exports = client => {
client.on('message', eventFetch('message'));
};
