module.exports.config = {
  name: "random",
  version: "0.0.2",
  permission: 0,
  prefix: true,
  credits: "Islamick Cyber Chat",
  description: "sad video",
  category: "admin",
  usages: "",
    cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")

    const res = await axios.get(`https://www.noobs-api.000.pe/dipto/random?random=random`);
    var data = res.data.url;
    var msg = [];
    let video = `${res.data.url}`;
  let name = `${res.data.name}`;
    let cp = `${res.data.cp}`
  let ln = `${res.data.count}`

    let videos = (await axios.get(`${video}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/video.mp4", Buffer.from(videos, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/video.mp4"));

    {
        msg += `╭•┄┅═══❁🌺❁═══┅┄•╮\n✨༄᭄𝐑𝐀𝐍𝐃𝐌 𝐕𝐈𝐃𝐄𝐎༄✨\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\n✰❥⏤͟͟͞͞◆🤍🪽\n\n𝐓𝐡𝐢𝐬 𝐕𝐢𝐝𝐞𝐨 𝐀𝐝𝐝𝐞𝐝 𝐍𝐚𝐦𝐞 𝐁𝐲n\n ●❥𝄞⋆⃝🌺✨━ ${name} ━●❥𝄞⋆⃝🌺\n\n•⎯͢⎯⃝🩷🫶🏻`
    }

    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID, event.messageID);
}
