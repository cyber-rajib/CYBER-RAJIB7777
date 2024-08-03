module.exports.config = {
  name: "kick",
  version: "1.0.0", 
  permssion: 2,
  prefix: true,
  credits: "Mirai Team",
  description: "remove form the group user",
  category: "user", 
  usages: "[tag]", 
  cooldowns: 0,
};

module.exports.run = function({ api, event }) {
  var mention = Object.keys(event.mentions);
  return api.getThreadInfo(event.threadID, (err, info) => {
    if (err) return api.sendMessage("কিছু সমস্যা হয়েছে-!!🥺",event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('╭•┄┅════❁🌺❁════┅┄•╮\n\n আমাকে আপনার গ্রুপ এর আডমিন করে দেন\n তাহলে আমি আপনার কথা মতো kick দিতে পারবো গ্রুপ মেম্বার দের-!!✨🖤\n╰•┄┅═══❁🌺❁═══┅┄•╯', event.threadID, event.messageID);
    if(!mention[0]) return api.sendMessage("╭•┄┅════❁🌺❁════┅┄•╮\n\n __যাকে kick দিবেন তার আইডি /kick @ দিয়ে Tag করুন-!!😌\n\n╰•┄┅════❁🌺❁════┅┄•╯",event.threadID);
    if (info.adminIDs.some(item => item.id == event.senderID)) {
      for (let o in mention) {
        setTimeout(() => {
          api.removeUserFromGroup(mention[o],event.threadID) 
        },3000)
      }
    }
  })
      }