const axios = require('axios');

module.exports.config = {
  name: "add",
  version: "11.9.7",
  permssion: 0,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "random love story video",
  category: "video",
  usages: "random",
  cooldowns: 30,
};
module.exports.run = async ({ api, event, args }) => {
  try {
    const imageUrl = event.messageReply.attachments[0].url;

    const response = await axios.get(`https://all-api-ius8.onrender.com/video/status?url=${imageUrl}`);
 api.sendMessage(`Request successful! Response: ${response.data}`, event.threadID, event.messageID);

  } catch (e) {
    console.log(e);
    api.sendMessage(`An error occurred: ${e.message}`, event.threadID, event.messageID);
  }
};
