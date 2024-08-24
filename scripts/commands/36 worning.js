const axios = require("axios");
const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");

module.exports.config = {
  name: "spamban",
  version: "1.1.0",
  permssion: 0,
  credits: "Islamick Cyber Chat",
  prefix:true,
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

  const sensitiveKeywords = ["i will kill you", "i will stab you", "kill you", "stab you", " বাঞ্চুদ","bancud","madarcud","মাদারচোদ","make cudi","মাকে চুদি","bl", "Bl","Bal","bal","Mc","mc","bc", "BC","বাল","sawya","সাওয়া","হাউয়া","সাউয়া","hauya","tor mare cudi", "Tor mare cudi","tor mare xudi", "Tor mare xudi", "তোর মারে চুদি", "আয় চুদি","ay cudi","ay xudi", "nodi", "magi","Magi", " bessa", "Bessa", "মাগি","নডি","xudi", "cudi", "cuda", "xuda","putki mara","পুটকি মারা","সোনা","suna", "vuda","vudi","tor mar vuda", "ভুদা","sex","hot","sexy","BC","bc","xudmarani","cudmarani", "vuda lal","madarxud", "magi baz", "bazar er khanki","bassa magi", "noti msgi", "kuttar bacha", " suorerbacca","potitamagi","potita","potitaloy","khankirpula","heda","হেডা","খামকির পুলা", "fuck you", "you idiot", "motherfucker"]; // Dagdagan mo lang kung gusto mong maraming keywords 
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
          const warningMessage = `╭•┄┅═❁🌺❁═┅┄•╮\n⚠️ 𝗪𝗔𝗥𝗡𝗜𝗡𝗚 ⚠️\n╰•┄┅═❁🌺❁═┅┄•╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n অনুগ্রহ করে সংবেদনশীল  অনুপযুক্ত অশ্লিল  ভাষা ব্যবহার করবেব না! 🙏 এটা ইসলামিক গ্রুপ তাই এখানে কোন প্রোকার ঝগড়া গালা গালি ও খারাপ কাজ করা থেকে বিরত থাকুন  ।\n\n  ☠️ 𝗨𝗦𝗘𝗥: ${userName}\n  🪪 𝗜𝗗: ${senderID}\n  💬 𝗠𝗦𝗚: ${keyword}`;
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
