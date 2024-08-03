module.exports.config = {
  name: "imgur",
  version: "1.0.0", 
  permssion: 0,
  prefix: true,
  credits: "Islamick Cyber Chat",
  description: "create your video link",
  category: "other", 
  usages: "[tag]", 
  cooldowns: 0,
};

module.exports.run = async ({ api, event, args }) => {
    const axios = global.nodemodule['axios'];
  const apis = await axios.get('https://raw.githubusercontent.com/islamickcyberchat/Imgur-/main/Cyber-Rajib')
  const n = apis.data.api
    const linkanh = event.messageReply.attachments[0].url || args.join(" ");
    if (!linkanh)
        return api.sendMessage('╭•┄┅════❁🌺❁════┅┄•╮\n\nআপনি যেই ছোবি বা ভিডিও কে লিংক এ পরিবর্তন করতে চান সেই ছোবি বা ভিডিও টি imgur লিখে tag দিন\n\n╰•┄┅════❁🌺❁════┅┄•╯', event.threadID, event.messageID);
    try {
      var tpk = `",`;
        const allPromise = (await Promise.all(event.messageReply.attachments.map(item => axios.get(`${n}/imgurv2?link=${encodeURIComponent(item.url)}`)))).map(item => item.data.uploaded.image);
        return api.sendMessage(`"` + allPromise.join('"\n"') + tpk, event.threadID, event.messageID);
    }
    catch (e) {
        return api.sendMessage('problem error', event.threadID, event.messageID);
    }
};