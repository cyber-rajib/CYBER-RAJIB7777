const axios = require("axios");
const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");

module.exports.config = {
  name: "spamban",
  version: "1.1.0",
  Permssion: 0,
  credits: "August Quinn",
  prefix :true,
  description: "Automatically warns users when certain sensitive keywords are detected in the message.",
  category: "System",
  cooldowns: 1
};

module.exports.run = async ({ event, api }) => {
};

module.exports.handleEvent = async ({ event, api }) => {
  const message = event.body.toLowerCase(); 
  const senderID = event.senderID; 
  if (global.data.userBanned.has(senderID)) {
    const lastWarningTime = global.data.userBanned.get(senderID);
    const currentTime = Date.now();
    const oneDayInMillis = 24 * 60 * 60 * 1000; 
    if (currentTime - lastWarningTime < oneDayInMillis) {
      return api.sendMessage(" ", event.threadID);
    }
  }

  const sensitiveKeywords = ["i will kill you", "i will stab you", "kill you", "stab you", "fuck you", "you idiot", "motherfucker"]; // Dagdagan mo lang kung gusto mong maraming keywords 
  const warningText = "WARNING!";

  for (const keyword of sensitiveKeywords) {
    if (message.includes(keyword)) {
      api.sendTypingIndicator(event.threadID);

      try {
        const userInfo = await api.getUserInfo([senderID]);
        const userName = userInfo[senderID].name;

        const userAvatarUrl = `https://graph.facebook.com/${senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;

        const response = await axios.get(userAvatarUrl, { responseType: "arraybuffer" });
        fs.writeFileSync(__dirname + "/cache/avt.png", Buffer.from(response.data, "utf-8"));

        const img = await loadImage(__dirname + "/cache/avt.png");
        const canvas = createCanvas(img.width, img.height);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        ctx.font = "bold 100px Arial";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText(warningText, canvas.width / 2, canvas.height / 2);

        const outputStream = fs.createWriteStream(__dirname + "/cache/warned_avt.png");
        canvas.createPNGStream().pipe(outputStream);
        outputStream.on("finish", () => {
          const warningMessage = `⚠️ 𝗪𝗔𝗥𝗡𝗜𝗡𝗚!\n\nYour message contains sensitive content. Please refrain from using inappropriate language or threatening other users.\n\n  ⦿ 𝗨𝗦𝗘𝗥: ${userName}\n  ⦿ 𝗜𝗗: ${senderID}\n  ⦿ 𝗞𝗘𝗬𝗪𝗢𝗥𝗗: ${keyword}`;
          api.sendMessage({ body: warningMessage, attachment: fs.createReadStream(__dirname + "/cache/warned_avt.png") }, event.threadID);

          global.data.userBanned.set(senderID, Date.now());
        });
      } catch (error) {
        console.error(error);
      }

      break;
    }
  }
};

module.exports.listenGlobal = true;