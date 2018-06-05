// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

var profanities = require('profanities') // we need to require all of our packages after we install them.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Evoking ${client.users.size} demons`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.users.size} users`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.users.size} users`);
});


client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  // My New Edits
  if(message.content.toLowerCase() === 'hello')
    message.channel.send('Hiya ' + message.author+'-chan welcome-!!');

  else if(message.content.toLowerCase() === 'hi')
    message.channel.send('Henlo-!! Cake or Death ' + message.author+'-? ');

  else if(message.content.toLowerCase() === 'hey')
    message.channel.send('What\'s up ' + message.author+'-? :coffee:');

  else if(message.content.toLowerCase() === 'herro')
    message.channel.send('Ohio ' + message.author+'-goshujin sama-!! :blush:');

  else if(message.content.toLowerCase() === 'henlo')
    message.channel.send('Greetings ' + message.author+'-milord-!! :smiling_imp:');

  else if(message.content.toLowerCase() === 'help')
    message.channel.send('What\'s wrong ' + message.author+'-chan-? :frowning:');

  else if(message.content.toLowerCase() === 'cake')
    message.channel.send('Yay-!! :cake:');

  else if(message.content.toLowerCase() === 'death')
    message.channel.send('Wrong answer-!! :smiling_imp:');

  else if(message.content.toLowerCase() === 'weehaw')
    message.channel.send('No, please don\'t, I... I\'m a virgin-!! :flushed:');

  else if(message.content.toLowerCase() === 'coffee')
    message.reply(':doughnut: Donut-!!');

  else if(message.content.toLowerCase() === 'mum')
    message.channel.send('Not now sweets-!! :yellow_heart:');

  else if(message.content.toLowerCase() === 'good morning')
    message.channel.send('Good morning, ' + message.author+'-chan-!!');

  else if(message.content.toLowerCase() === 'good night')
    message.channel.send('Night night ' + message.author+' sleep tight-!! :purple_heart::coffee::last_quarter_moon_with_face: ');

  else if(message.content.toLowerCase() === 'nya')
    message.channel.send('Nya nya, I\'m a neko-mimi-!! :beers:');

  else if(message.content.toLowerCase() === 'gay')
    message.channel.send('no u-!! :cake:');

  else if(message.content.toLowerCase() === 'no')
    message.channel.send('oh okie-!! :cake:');

  else if(message.content.toLowerCase() === 'yes')
    message.channel.send('Yay-!!☆ :cake:');

  else if(message.content.toLowerCase() === 'donut')
    message.channel.send('Cakies-!! :cake:');

  else if(message.content.toLowerCase() === 'cupcake')
    message.channel.send('ごめんね。 :cake::coffee:');

  else if(message.content.toLowerCase() === 'what the hecc')
    message.channel.send('Meowtha-chan hecc\'d you and stole 6,000,000 credits-!! :yen:');

  else if(message.content.toLowerCase() === 'hecc')
    message.channel.send('Meowchan-??');

  else if(message.content.toLowerCase() === 'nani')
    message.channel.send('あれ？あれ？ :coffee::yen:');

  else if(message.content.toLowerCase() === 'what\'s up')
    message.channel.send('Giga Pudding-!! ٩(๑❛ᴗ❛๑)۶');

  else if(message.content.toLowerCase() === 'boobs')
    message.channel.send('やめて-!! へんたい :flushed:');

  else if(message.content.toLowerCase() === 'i love you')
    message.channel.send('I love you too ' + message.author+' :purple_heart:');

  else if(message.content.toLowerCase() === 'loli')
    message.channel.send('Stop ' + message.author+'-!! I\'m calling the police-!!');

  else if(message.content.toLowerCase() === 'lolis')
    message.channel.send('Stop ' + message.author+'-!! I\'m calling the police-!!');

  else if(message.content.toLowerCase() === 'ttyl')
    message.channel.send('Okie bye ' + message.author+'-!! See you soon-!! :yellow_heart: ');

  else if(message.content.toLowerCase() === 'bye')
    message.channel.send('Okie bye ' + message.author+'-!! See you soon-!! :hearts: ');

  else if(message.content.toLowerCase() === 'goodbye')
    message.channel.send('Okie bye ' + message.author+'-!! See you soon-!! :yellow_heart: ');


  // Profanity
  for (x = 0; x < profanities.length; x++) {//This loops every word for the profanities list you downloaded.}
    if(message.content.toUpperCase() == profanities[x].toUpperCase()) {
      message.channel.send('I\'m telling my dad-!!') // tells them they cannot say that.
      message.delete(); // Deletes the message
      return; //Stops the rest of the commands from running after they put profanity in their text.

    }
  }

  // ABOVE IS ALL MINE

  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
  
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Deathwish", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  
  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});

client.login(config.token);