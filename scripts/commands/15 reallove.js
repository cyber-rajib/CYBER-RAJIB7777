module.exports.config = {
  name: "real",
  version: "1.0.0",
  permssion: 0,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "ғɪɴᴅɪɴɢ ʏᴏᴜʀ ᴏᴛʜᴇʀ ʜᴀʟғ",
  category: "love",
  usages: "[boy/girl]",
  cooldowns: 15
}
module.exports.run = async ({ api, event,args, Users }) => {
 const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  if (!args[0]) {
            var ThreadInfo = await api.getThreadInfo(event.threadID);
    var name = (await Users.getData(id)).name
            var all = ThreadInfo.userInfo
            let data = [];
            for (let u of all) {
                if (u.gender == "MALE") {
                 if ( u != event.senderID) data.push(u.id)   
                }
                if (u.gender == "FEMALE") {
                  if ( u != event.senderID) data.push(u.id)  
              }
            }
            console.log(data)
            if (data.length == 0) return api.sendMessage("sᴏʀʀʏ ᴄᴀɴᴛ ғɪɴᴅ ʏᴏᴜʀ ʜᴀʟғ ʟɪғᴇ 😔💔", event.threadID, event.messageID);
            let e = data[Math.floor(Math.random() * data.length)]
            let a = (Math.random() * 50)+50;
            var n = (await Users.getData(e)).name
            const url = api.getCurrentUserID(e);


            let getAvatar = (await axios.get(`https://graph.facebook.com/${e}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(getAvatar, "utf-8") );
            api.sendMessage({ body: `｢ 🧡 ｣ ғɪɴᴅɪɢ ʏᴏᴜʀ ᴏᴛʜᴇʀ ʜᴀʟғ ｢ 🧡 ｣\n🤍 ɴᴀᴍᴇ: ${n}\n💜 ʀᴇʟᴀᴛɪᴏɴsʜɪᴘ: sɪɴɢʟᴇ (ᴘᴏssɪʙʟʏ)\n❤️‍🩹 sᴜɪᴛᴀʙɪʟɪᴛʏ: ${a.toFixed(2)}%\n🪪 ʏᴏᴜʀ ɪᴅ: ${url}\n📎ғᴀᴄᴇʙᴏᴏᴋ ɪᴅ ʟɪɴᴋ: https://m.facebook.com/${e}`,
                  attachment: fs.createReadStream(__dirname + `/cache/avt.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avt.png`), event.messageID);
  }
  else {            
    var ThreadInfo = await api.getThreadInfo(event.threadID);
    var all = ThreadInfo.userInfo
            let data = [];
      if(args[0] == "boy"){
            for (let u of all) {
        if (u.gender == "MALE") {
                if (u != event.senderID) data.push(u.id)   
                }
            }}  

      else if(args[0] == "girl"){
            for (let u of all) {
                if (u.gender == "FEMALE") {
                if (u != event.senderID) data.push(u.id)  
                }
            }}
            console.log(data)

            if (data.length == 0) return api.sendMessage("sᴏʀʀʏ ᴄᴀɴᴛ ғɪɴᴅ ʏᴏᴜʀ ʜᴀʟғ ʟɪғᴇ 😔💔", event.threadID, event.messageID);
            let e = data[Math.floor(Math.random() * data.length)]
            let a = (Math.random() * 50)+50;
            var n = (await Users.getData(e)).name
            const url = api.getCurrentUserID(e);
            let getAvatar = (await axios.get(`https://graph.facebook.com/${e}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(getAvatar, "utf-8") );
            api.sendMessage({ body: `｢ 🧡 ｣ ғɪɴᴅɪɢ ʏᴏᴜʀ ᴏᴛʜᴇʀ ʜᴀʟғ ｢ 🧡 ｣\n🤍 ɴᴀᴍᴇ: ${n}\n💜 ʀᴇʟᴀᴛɪᴏɴsʜɪᴘ: sɪɴɢʟᴇ (ᴘᴏssɪʙʟʏ)\n ❤️‍🩹sᴜɪᴛᴀʙɪʟɪᴛʏ: ${a.toFixed(2)}%\n🪪 ʏᴏᴜʀ ɪᴅ: ${url}\n📎ғᴀᴄᴇʙᴏᴏᴋ ɪᴅ ʟɪɴᴋ: https://m.facebook.com/${e}`,
                  attachment: fs.createReadStream(__dirname + `/cache/avt.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avt.png`), event.messageID);}

};