module.exports.config = {
  name: "janu",
  version: "0.0.2",
  permission: 0,
  prefix: false,
  credits: "Islamick Cyber Chat",
  description: "fun",
  category: "admin",
  usages: "",
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Users }) {
    const axios = require("axios");
    const request = require("request");
    const fs = require("fs-extra");
    const prompt = args.join(" ");
    var id = event.senderID;
    var name = await Users.getNameUser(event.senderID);
    var tl = ["\n- হুম জানু বলো কি বলবা সোনা-!!😘😊","\n হুম জান বলো কি বলবা-!!❤️✌️","\n অহ আমার জানু টা আমি এই তো সোনা ডেকো না আর-!!😍❤️","\n\n- জানু আমাকে দাকলে কিছু বলবা জানু-!!✨🤍🤭","\nএই তো জানু আমি এখানে হারিয়ে জাইনি তো সোনা-!!🙈😽","\n না জানু সোনা আমার তুমার কথা এখন থেকে আর শুনবো না আর\n তুমার সাথে আরি-!!😌😾","\n\nকার দেওয়া ফুল খোঁপার চুলে\n তুমার ওই মুখে আমার নাম নিবা না আর অন্য মেয়েদের ডাকো গা যাও-!!😭😈","\nতুমি আর আমার সাথে কথা বলবা না।\n তুমি কাল পাসের বাড়ির ভাবির সাথে কি করসো-!!🤬😤","\n আমাকে আর বাবু ডাকবে না..!😾\nতুমার আব্বুর কাছে নালিশ দিবো আমি..!😤\n তুমি ভাবি দের সাথে খারাপ কাজ কর-!!😈😭","\nকোন সাহ্যসে তুমি আমাকে ডাকো তুমি একটা লুচ্চা-!!😈","\n অলে বাবু টা লে আমার__😘😍\n কি হয়েছে সোনা তুমার-!!😔\n ডাকলে যে...??","\n - হুম বাবু পরে কথা হবে এখন রাখি-!!😘😍🥹","\n i love","\n - হুম বাবু রান্না  কবো এখন পরে কথা বলি-!!😊😔",];
    var rand = tl[Math.floor(Math.random() * tl.length)];
    if (!prompt) return api.sendMessage(` ${rand}`, event.threadID, event.messageID);
    const res = await axios.get(`https://all-api-ius8.onrender.com/sim?text=${prompt}`);
    const respond = res.data.reply;
    return api.sendMessage( respond, event.threadID, event.messageID);
};
