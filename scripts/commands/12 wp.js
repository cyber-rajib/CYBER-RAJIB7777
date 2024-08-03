module.exports.config = {
  name: "wp",
  version: "1.1.1",
  permssion: 0,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "create wp link",
  category: "wo",
  usages: "[whats up number]",
  cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
var say = args.join(" ")
  if (!say) api.sendMessage("Please enter a wp number", event.threadID, event.messageID)
  else api.sendMessage(`wa.me/+88${say}`, event.threadID, event.messageID);
}
