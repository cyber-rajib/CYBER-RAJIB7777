module.exports = {
  config:{
    name: "auto",
    version: "0.0.2",
    permission: 0,
    prefix: 'awto',
    credits: "Nayan",
    description: "auto video download",
    category: "user",
    usages: "",
    cooldowns: 5,
},
start: async function({ nayan, events, args }) {},
handleEvent: async function ({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const {alldown} = require("nayan-media-downloader")
  if (body.startsWith("https://")) {
  api.setMessageReaction("📿", event.messageID, (err) => {}, true);
const data = await alldown(content);
  console.log(data)
  const {low, high, title} = data.data;
    api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true);
  const video = (await axios.get(high, {
      responseType: "arraybuffer",
    })).data;
    fs.writeFileSync(__dirname + "/cache/auto.mp4", Buffer.from(video, "utf-8"))

        return api.sendMessage({
            body: `⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n\nᴛɪᴛʟᴇ: ${title}\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆`,
            attachment: fs.createReadStream(__dirname + "/cache/auto.mp4")

        }, event.threadID, event.messageID);
    }
}
}