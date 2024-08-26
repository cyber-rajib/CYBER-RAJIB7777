const axios = require('axios');

module.exports.config = {
  name: "add",
  version: "11.9.7",
  permission: 0,
  credits: "Islamick Cyber Chat",
  prefix: true,
  description: "random love story video",
  category: "video",
  usages: "random",
  cooldowns: 30,
};

module.exports.onStart = async ({ api, event, args }) => {
  try {
    const imageUrl = event.messageReply.attachments[0].url;
    const videoName = args.join(" ").trim();

    if (!videoName) {
      return api.sendMessage("Please provide a name for the video.", event.threadID, event.messageID);
    }

    const response = await axios.get(`https://all-api-ius8.onrender.com/video/random?name=${encodeURIComponent(videoName)}&url=${encodeURIComponent(imageUrl)}`);
    api.sendMessage(`Request successful! Name: ${response.data.name}\nURL: ${response.data.url}`, event.threadID, event.messageID);

  } catch (e) {
    console.log(e);
    api.sendMessage(`An error occurred: ${e.message}`, event.threadID, event.messageID);
  }
};
