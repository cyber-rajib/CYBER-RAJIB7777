const axios = require("axios");
const fs = require("fs");
const request = require("request");

const link = [
  "https://i.imgur.com/uAhcwez.mp4",

];

module.exports.config = {
  name: "😍",
  version: "1.0.0",
  permssion: 0,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "auto reply to 😍",
  category: "noprefix",
  usages: "😍",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.handleEvent = async ({ api, event, Threads }) => {
  const content = event.body ? event.body : '';
    const body = content.toLowerCase();
  if (body.startsWith("😍")) {
    const rahad = [
      "︵🦋💛🌻 𝐋𝐞𝐭 𝐰𝐡𝐚𝐭 𝐡𝐚𝐩𝐩𝐞𝐧𝐬 𝐛𝐞_✦🙂\n\n_𝐀𝐥𝐥𝐚𝐡 𝐡𝐚𝐬 𝐭𝐡𝐨𝐮𝐠𝐡𝐭 𝐦𝐮𝐜𝐡 𝐦𝐨𝐫𝐞 𝐭𝐡𝐚𝐧 𝐲𝐨𝐮 𝐭𝐡𝐢𝐧𝐤._!!🌺\n\n︵যা হচ্ছে হতে দিন-༎۵\n\n_আল্লাহ্ আপনার ভাবনার চেয়েও অনেক বেশি কিছু ভেবে রেখেছেন!🌸🌻🤲🕋",
      "︵🦋💛🌻 𝐋𝐞𝐭 𝐰𝐡𝐚𝐭 𝐡𝐚𝐩𝐩𝐞𝐧𝐬 𝐛𝐞_✦🙂\n\n_𝐀𝐥𝐥𝐚𝐡 𝐡𝐚𝐬 𝐭𝐡𝐨𝐮𝐠𝐡𝐭 𝐦𝐮𝐜𝐡 𝐦𝐨𝐫𝐞 𝐭𝐡𝐚𝐧 𝐲𝐨𝐮 𝐭𝐡𝐢𝐧𝐤._!!🌺\n\n︵যা হচ্ছে হতে দিন-༎۵\n\n_আল্লাহ্ আপনার ভাবনার চেয়েও অনেক বেশি কিছু ভেবে রেখেছেন!🌸🌻🤲🕋"

    ];
    const rahad2 = rahad[Math.floor(Math.random() * rahad.length)];

    const callback = () => api.sendMessage({
      body: `${rahad2}`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);

    const requestStream = request(encodeURI(link[Math.floor(Math.random() * link.length)]));
    requestStream.pipe(fs.createWriteStream(__dirname + "/cache/2024.mp4")).on("close", () => callback());
    return requestStream;
  }
};

module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
    "successText": `🧠`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
};

module.exports.run = async ({ api, event, Threads, getText }) => {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["😍"] === "undefined" || data["😍"]) data["😍"] = false;
  else data["😍"] = true;
  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["😍"]) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};