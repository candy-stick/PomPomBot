module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Info',
    description: 'Returns Bot Latency',
    usage: 'ping',
    run: async (client, message, args) => {

        if (!message.guild) return;

        const msg = await message.reply({
            content: '**Loading..**', allowedMentions: { repliedUser: false }
        });

        const ping = msg.createdTimestamp - message.createdTimestamp;
        msg.edit({
            content: `**Pong!**\n**Time:** \`${Date.now() - message.createdTimestamp}ms \``, allowedMentions: { repliedUser: false }
        });
    },
};