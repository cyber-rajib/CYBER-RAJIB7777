module.exports.config = {
  name: "random",
  version: "0.0.2",
  permission: 0,
  prefix: true,
  credits: "Islamick Cyber Chat",
  description: "Random",
  category: "video",
  usages: "",
    cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
  const apis = await axios.get('https://raw.githubusercontent.com/shaonproject/Shaon/main/api.json')
  const n = apis.data.api;
    const res = await axios.get(`${n}/video/random`);
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
        msg += `${cp}\n\n✰❥⏤͟͟͞͞◆🤍🪽\n\n𝐓𝐨𝐭𝐚𝐥 𝐕𝐢𝐝𝐞𝐨𝐬: ｢${ln}｣\n𝐓𝐡𝐢𝐬 𝐕𝐢𝐝𝐞𝐨 𝐀𝐝𝐝𝐞𝐝 𝐁𝐲 ●❥𝄞⋆⃝🌺✨━ ${name} ━●❥𝄞⋆⃝🌺\n\n•⎯͢⎯⃝🩷🫶🏻`
    }

    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID, event.messageID);
}
