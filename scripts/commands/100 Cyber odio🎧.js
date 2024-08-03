const fs = require("fs");
module.exports.config = {
  name: "🎧",
  version: "1.0.1",
  permssion: 0,
  credits: "Islamick Cyber Chat", 
  prefix : true,
  description: "noprefix audio",
  category: "no prefix",
  usages: "🎧",
  cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("🎧")==0 || event.body.indexOf("🎧")==0 || event.body.indexOf("🎧")==0 || event.body.indexOf("🎧")==0) {
    var msg = {
        body: "🖤🎧",
        attachment: fs.createReadStream(__dirname + `/cyber/npx.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }