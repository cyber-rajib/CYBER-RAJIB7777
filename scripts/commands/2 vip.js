module.exports.config = {
  name: "vip",
  version: "0.0.1",
  permssion: 0,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "profile picture",
  category: "random-img",
  usages: "vip",
  cooldowns: 0,
  envConfig: {
    cooldownTime: 1200000
  }
};
module.exports.onLoad = async function () {
      console.log("===========» API ISLAMICK CHAT «===========");
}
module.exports.run = async function ({ event, api , args, Users}){
  const fs = require("fs");
  let name1 = await Users.getNameUser(event.senderID)
  var name = ["Insta girl stylish pp", "Insta girl boy pp", "Random hot girl pp", "Islamick random pp", "Stylish boy pp", "Islamick Love Story pp", "Stylish frame pp", "Black lover boy", "Stylish logo pp", "Stylish profile plp", "yellow shirt boy and girl pp", "King stylish pp", "Stylish girl pp", "Attitude boy pp", "Crush png frame pp", "Hizapi cute girl pp", "Random insta boy and girl pp", "Colour logo pp", "Follower logo png", "Quran pp", "Bike love story pp", "Stylish girl pp", "Fb vip cover pp", "Xml hot girl pp", "Vip attitude frame  pp", "Insta logo vip girl pp", "Vip girl pp", "Vip boy pp", "Nature Random pp", "Natural follower pp", "Natural xml  pp", "Natural humanity pp", "Natural New pp", "Natural imagine pp", "Natural Tranding pp", "Vip love story pp", "Crash girl pp", "Fb stylish cover pp", "Islamick cover pp", "New Fb stylish cover pp", "Islamick boy pp", "Islamick cute girl pp", "Islamick cute boy baby pp", "Islamick cute girl baby pp", "Cute baby couple pp", "Cute couple loves pp", "Attitude cute baby boy pp", "Attitude cute baby girl pp", "Attitude Cat pp", "Natural Robot pp", "Programing robot pp", "Hacking pp", "Coding pp", "Cyber hacker pp", "Malware attack  pp", "Ethical hacking pp", "random img", "randm"]
  var b = name.length;
  var page = 1;
  page = parseInt(args[0]) || 1;
  page < -1 ? page = 1 : "";
  var limit = 10;
  var numPage = Math.ceil(b / limit);
  var msg = `╭•┄┅══❁🌺❁══┅┄•╮\n    𝐕𝐈𝐏 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 𝐏𝐈𝐂𝐓𝐔𝐑𝐄\n╰•┄┅══❁🌺❁══┅┄•╯\n\n`;
  var x = 1;
  for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
      if (i >= b) break;
      msg += `｢🪄｣ ${i+1} ${name[i]}\n\n`;
  }
  msg += `｢🌸｣ 𝐏𝐚𝐠𝐞 (${page}/${numPage})\n｢🪄｣𝐔𝐬𝐞 ${global.config.PREFIX}${this.config.name}\n｢👀｣𝐍𝐮𝐦𝐛𝐞𝐫 𝐨𝐟 𝐩𝐚𝐠𝐞𝐬\n\n｢🦋｣ 𝐏𝐥𝐞𝐚𝐬𝐞 ${name1} 𝐑𝐞𝐩𝐥𝐲 𝐭𝐨 𝐭𝐡𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐚𝐜𝐜𝐨𝐫d𝐢𝐧𝐠 𝐭𝐨 𝐭𝐡𝐞 𝐨𝐫d𝐞𝐫 𝐧𝐮𝐦𝐛𝐞𝐫 𝐭𝐨 𝐬𝐞𝐥𝐞𝐜𝐭 𝐩𝐡𝐨𝐭𝐨𝐬\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n｢🖤｣ 𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁 ｢🖤｣`;
  return api.sendMessage(msg, event.threadID, (error, info) =>
  {
    global.client.handleReply.push(
    {
      name: this.config.name,
      messageID: info.messageID,
      author: event.senderID,
      type: "choose"
    });
  }, event.messageID);
}
module.exports.handleReply = async function ({ event, api , args, handleReply, Users}){
  const axios = require("axios");

           if(event.body == "1"){
       var url = "https://vip-img-api.onrender.com/ai"
}
       else if(event.body == "2"){
       var url = "https://vip-img-api.onrender.com/bot"
}
       else if(event.body == "3"){
       var url = "https://vip-img-api.onrender.com/cosplay"
}
        else if(event.body == "4"){
        var url = "https://vip-img-api.onrender.com/gai"
}
        else if(event.body == "5"){
        var url = "https://vip-img-api.onrender.com/ig"
}
       else if(event.body == "6"){
        var url = "https://vip-img-api.onrender.com/trai"
}
       else if(event.body == "7"){
        var url = "https://vip-img-api.onrender.com/tw"
}
       else if(event.body == "8"){
        var url = "https://vip-img-api2.onrender.com/ai"
}
       else if(event.body == "9"){
       var url = "https://vip-img-api2.onrender.com/bot"
}
       else if(event.body == "10"){
       var url = "https://vip-img-api2.onrender.com/cosplay"
}
       else if(event.body == "11"){
       var url = "https://vip-img-api2.onrender.com/gai"
}
      else if(event.body == "12"){
        var  url = "https://vip-img-api2.onrender.com/ig"
}
       else if(event.body == "13"){
        var  url = "https://vip-img-api2.onrender.com/trai"
}
       else if(event.body == "14"){
       var url = "https://vip-img-api2.onrender.comg/tw"
}
       else if(event.body == "15"){
       var url = "https://vip-img-api3.onrender.com/ai"
}
       else if(event.body == "16"){
        var url = "https://vip-img-api3.onrender.com/bot"
}
       else if(event.body == "17"){
         var url = "https://vip-img-api3.onrender.com/cosplay"
}
       else if(event.body == "18"){
        var url = "https://vip-img-api3.onrender.com/gai"
}
       else if(event.body == "19"){
         var url = "https://vip-img-api3.onrender.com/ig"
}
       else if(event.body == "20"){
        var url = "https://vip-img-api3.onrender.com/trai"
}
      else if(event.body == "21"){
        var url = "https://vip-img-api3.onrender.com/tw"
}
     else if(event.body == "22"){
        var url = "https://vip-img-api4.onrender.com/ai"
}
     else if(event.body == "23"){
        var url = "https://vip-img-api4.onrender.com/bot"
}
     else if(event.body == "24"){
        var url = "https://vip-img-api4.onrender.com/cosplay"
}
     else if(event.body == "25"){
        var url = "https://vip-img-api4.onrender.com/gai"
}
     else if(event.body == "26"){
         var url = "https://vip-img-api4.onrender.com/ig"
}
     else if(event.body == "27"){
       var  url = "https://vip-img-api4.onrender.com/trai"
}
     else if(event.body == "28"){
         var url = "https://vip-img-api4.onrender.com/tw "
}
     else if(event.body == "29"){
         var url = "https://vip-img-api5.onrender.com/ai"
}
     else if(event.body == "30"){
       var url = "https://vip-img-api5.onrender.com/ai"
}
     else if(event.body == "31"){
       var url = "https://vip-img-api5.onrender.com/ai"
}
     else if(event.body == "32"){
        var url = "https://vip-img-api5.onrender.com/ai"
}
     else if(event.body == "33"){
      var url = "https://vip-img-api5.onrender.com/ai"
}
     else if(event.body == "34"){
       var url = "https://vip-img-api5.onrender.com/ai"
}
     else if(event.body == "35"){
       var url = "https://vip-img-api5.onrender.com/ai"
}
     else if(event.body == "36"){
       var url = "https://vip-img-api6.onrender.com/ai"
}
     else if(event.body == "37"){
      var url = "https://vip-img-api6.onrender.com/bot"
}
     else if(event.body == "38"){
      var url = "https://vip-img-api6.onrender.com/cosplay"
}
      else if(event.body == "39"){
      var url = "https://vip-img-api6.onrender.com/gai"
}
      else if(event.body == "40"){
      var url = "https://vip-img-api6.onrender.com/ig"
}
      else if(event.body == "41"){
      var url = "https://vip-img-api6.onrender.com/trai"
}
      else if(event.body == "42"){
      var url = "https://vip-img-api6.onrender.com/tw"
}
      else if(event.body == "43"){
      var url = "https://vip-img-api7.onrender.com/ai"
}
      else if(event.body == "44"){
      var url = "https://vip-img-api7.onrender.com/bot"
}
      else if(event.body == "45"){
      var url = "https://vip-img-api7.onrender.com/cosplay"
}
      else if(event.body == "46"){
      var url = "https://vip-img-api7.onrender.com/gai"
}
      else if(event.body == "47"){
      var url = "https://vip-img-api7.onrender.com/ig"
}
      else if(event.body == "48"){
      var url = "https://vip-img-api7.onrender.com/trai"
}
      else if(event.body == "49"){
      var url = "https://vip-img-api7.onrender.com/tw"
}
  else if(event.body == "50"){
      var url = "https://vip-img-api8.onrender.com/ai"
}
  else if(event.body == "51"){
      var url = "https://vip-img-api8.onrender.com/bot"
}
  else if(event.body == "52"){
      var url = "https://vip-img-api8.onrender.com/cosplay"
}
  else if(event.body == "53"){
      var url = "https://vip-img-api8.onrender.com/gai"
}
  else if(event.body == "54"){
      var url = "https://vip-img-api8.onrender.com/ig"
}
  else if(event.body == "55"){
      var url = "https://vip-img-api8.onrender.com/trai"
}
  else if(event.body == "56"){
      var url = "https://vip-img-api8.onrender.com/tw"
}
  else if(event.body == "57"){
      var url = "https://vip-img-api8.onrender.com/trai"
}
  else if(event.body == "58"){
      var url = "https://vip-img-api9.onrender.com/trai"
}
  switch(handleReply.type){
  case "choose":{
  api.unsendMessage(handleReply.messageID);
  const res = await axios.get(url);
  const fs = require ("fs");
  let name = await Users.getNameUser(event.senderID)
  const data = res.data.data;
  const download = (await axios.get(data, {
      responseType: "stream"
  })).data;
  return api.sendMessage({body: `｢🌩️｣       𝐒𝐮𝐜𝐜𝐞𝐬𝐬       ｢🌩️｣\n｢📸｣       𝐏𝐡𝐨𝐭𝐨 𝐛𝐲     ｢📸｣ ${name}𝐓𝐡𝐢𝐬\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆`, attachment : download}, event.threadID)
}
  }
}
