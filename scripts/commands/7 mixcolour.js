module.exports.config = {
  name: "mixcolour",
  version: "1.0.0",
  permssion: 0,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "random color",
  category: "Other",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const res = await axios.get(`https://api.popcat.xyz/randomcolor`);
    var data = res.data.image;
    var name = res.data.name;
    var hex = res.data.hex;
    var msg = [];
    let a = `${res.data.image}`;

    let imgs1 = (await axios.get(`${a}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.png", Buffer.from(imgs1, "utf-8"));

    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.png"));
    return api.sendMessage({body:`𝐂𝐎𝐋𝐎𝐔𝐑 𝐍𝐀𝐌𝐄: ${name}\n𝐂𝐎𝐋𝐎𝐔𝐑 𝐂𝐎𝐃𝐄 : ${hex}`,attachment: allimage
    }, event.threadID);
}