import Fosscord from "fosscord-gopnik";
const prefix = '!' 
const bot = new Fosscord.Client({
        intents: ["GUILD_MESSAGES"],
        // New default endpoints:
        http: {
                api: 'https://gadajcord.us/api',
                cdn: 'https://gadajcord.us',
                invite: 'https://gadajcord.us',
        },
});

bot.login("tokenhere");

bot.on('ready', () => console.log('The Bot is ready!'));



//Welcome & goodbye messages\\
bot.on('guildMemberAdd', member => {
    member.roles.add(member.guild.roles.cache.find(i => i.name === 'Gadajcord'))

    const welcomeEmbed = new Discord.MessageEmbed()

    welcomeEmbed.setColor('#5cf000')
    welcomeEmbed.setTitle('**' + member.user.username + '** is now Among Us other **' + member.guild.memberCount + '** people')
    welcomeEmbed.setImage('https://gadajcord.us/attachments/1022185769067941944/1029314932061089990/welcome.png')

    member.guild.channels.cache.find(i => i.name === 'greetings').send(welcomeEmbed)
})

bot.on('guildMemberRemove', member => {
    const goodbyeEmbed = new Discord.MessageEmbed()

    goodbyeEmbed.setColor('#f00000')
    goodbyeEmbed.setTitle('**' + member.user.username + '** was not the impostor there are **' + member.guild.memberCount + '** left Among Us')
    goodbyeEmbed.setImage('https://gadajcord.us/attachments/1022185769067941944/1029314912012316845/goodbye.png')

    member.guild.channels.cache.find(i => i.name === 'greetings').send(goodbyeEmbed)
})
//Welcome & goodbye messages end\\