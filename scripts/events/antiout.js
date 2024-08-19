module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "Islamick Cyber Chat",
 description: "Listen events Notify bot or group member with random gif/photo/video"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`𝐃𝐞𝐚𝐫 ${name} 𝐘𝐨𝐮 𝐡𝐚𝐯𝐞 𝐛𝐞𝐞𝐧 𝐛𝐚𝐧𝐧𝐞d 𝐟𝐫𝐨𝐦 𝐨𝐮𝐫 𝐫𝐨𝐛𝐨𝐭 𝐠𝐫𝐨𝐮𝐩 𝐬𝐨 𝐰𝐞 𝐜𝐨𝐮𝐥d 𝐧𝐨𝐭 𝐚dd 𝐲𝐨𝐮 𝐟𝐮𝐥𝐥𝐲..!🙂💔`, event.threadID)
   } else api.sendMessage(`𝐃𝐞𝐚𝐫, ${name} 𝐓𝐡𝐞 𝐥𝐞𝐚𝐯𝐞 𝐈𝐃 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐚dd𝐞d 𝐚𝐠𝐚𝐢𝐧...!✨🌺🍂`,

 event.threadID);
  })
 }
                     }
