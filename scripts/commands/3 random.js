module.exports.config = {
  name: "randommix",
  version: "11.9.7",
  permssion: 0,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "random love story video",
  category: "video",
  usages: "random",
  cooldowns: 30,
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var shaon = ["https://all-api-ius8.onrender.com/video/status",
"https://all-api-ius8.onrender.com/video/sad",
"https://all-api-ius8.onrender.com/video/baby",
"https://all-api-ius8.onrender.com/video/love",
"https://all-api-ius8.onrender.com/video/ff",
"https://all-api-ius8.onrender.com/video/shairi",
"https://all-api-ius8.onrender.com/video/humaiyun",
"https://all-api-ius8.onrender.com/video/islam",
"https://all-api-ius8.onrender.com/video/anime",
"https://all-api-ius8.onrender.com/video/short",
"https://all-api-ius8.onrender.com/video/event",
"https://all-api-ius8.onrender.com/video/prefix",
"https://all-api-ius8.onrender.com/video/cpl",
"https://all-api-ius8.onrender.com/video/time",
"https://all-api-ius8.onrender.com/video/lofi",
"https://all-api-ius8.onrender.com/video/happy"
]
  var shaon1 = shaon[Math.floor(Math.random() * shaon.length)]
  axios.get(shaon1).then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let shaon2 = res.data.shaon;
  let callback = function () {
          api.sendMessage({
            body: `𝐒𝐏𝐀𝐘𝐒𝐇𝐄𝐀𝐋 𝐑𝐀𝐍𝐃𝐎𝐌 𝐌𝐈𝐗 𝐕𝐈𝐃𝐄𝐎...🎬\n\n
${shaon2} 𝚃𝙾𝚃𝙰𝙻 𝚅𝙸𝙳𝙴𝙾:${count}...🎬\n\n｢𝐈𝐒𝐋𝐀𝐌𝐈𝐂𝐊 𝐂𝐘𝐁𝐄𝐑 𝐂𝐇𝐀𝐓｣`,
            attachment: fs.createReadStream(__dirname + `/cache/Shaoon.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/Shaoon.mp4`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/Shaoon.mp4`)).on("close", calnback);
      })
}