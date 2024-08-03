module.exports.config = {
  name: "m",
  version: "1.0.0",
  Permssion: 1,
  credits: "Islamick Cyber Chat",
  prefix: false,
  description: "admon only",
  category: "admin only",
  usages: "admin only",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
  "https://i.imgur.com/QJbVJNf.jpeg",
"https://i.imgur.com/d6gpkQY.jpeg",
"https://i.imgur.com/ASkgfc1.jpeg",
"https://i.imgur.com/plg6V07.jpeg",
"https://i.imgur.com/reY8Qkw.jpeg",
"https://i.imgur.com/SMlGqNh.jpeg",
"https://i.imgur.com/MXAH9Zo.jpeg",
"https://i.imgur.com/Q8C6kQT.jpeg",
"https://i.imgur.com/0hLFlEB.jpeg",
"https://i.imgur.com/ata4YKz.jpeg",
"https://i.imgur.com/s5uxHGA.jpeg",
"https://i.imgur.com/fHOjfyc.jpeg",
"https://i.imgur.com/Pho89b2.jpeg",
"https://i.imgur.com/5Gm4UOP.jpeg",
"https://i.imgur.com/IlA60NZ.jpeg",
"https://i.imgur.com/ZZQKFh9.jpeg",
"https://i.imgur.com/fTkJmbV.jpeg",
"https://i.imgur.com/fKmQ7Tk.jpeg",
"https://i.imgur.com/x7iAlVL.jpeg",
"https://i.imgur.com/IGU99AF.jpeg",
"https://i.imgur.com/8whIYor.jpeg",
"https://i.imgur.com/uU00K2D.jpeg",
"https://i.imgur.com/yCyRayO.jpeg",
"https://i.imgur.com/hyJfjml.jpeg",
"https://i.imgur.com/TU5R1wG.jpeg",
"https://i.imgur.com/ujENZ4N.jpeg",
"https://i.imgur.com/FFbsqNN.jpeg",
"https://i.imgur.com/fse1b94.jpeg",
"https://i.imgur.com/gJx4R8Z.jpeg",
"https://i.imgur.com/oHLC5d4.jpeg",
"https://i.imgur.com/fkhBcMH.jpeg",
"https://i.imgur.com/MWeVxiN.jpeg",
"https://i.imgur.com/2SGBPBY.jpeg",
"https://i.imgur.com/T5UIn7S.jpeg",
"https://i.imgur.com/ByA2vhv.jpeg",
"https://i.imgur.com/eW2hF86.jpeg",
"https://i.imgur.com/UyZmtz2.jpeg",
"https://i.imgur.com/0pGPzCc.jpeg",
"https://i.imgur.com/N3Kcjty.jpeg",
"https://i.imgur.com/TrxoJzU.jpeg",
"https://i.imgur.com/oMU8nmd.jpeg",
"https://i.imgur.com/kLScCWg.jpeg",
"https://i.imgur.com/CPXrfIl.jpeg",
"https://i.imgur.com/UDOVjcP.jpeg",
"https://i.imgur.com/HjSuR2F.jpeg",
"https://i.imgur.com/mCIepKK.jpeg",
"https://i.imgur.com/TOnuTzF.jpeg",
"https://i.imgur.com/17gfAaJ.jpeg",
"https://i.imgur.com/VQkOkSY.jpeg",
"https://i.imgur.com/UexKeGj.jpeg",
"https://i.imgur.com/IMfFovB.jpeg",
"https://i.imgur.com/75QTPuU.jpeg",
"https://i.imgur.com/TIuBQ7k.jpeg",
"https://i.imgur.com/C9qKnYf.jpeg",
"https://i.imgur.com/XxaCYfP.jpeg",
"https://i.imgur.com/BdkInL1.jpeg",
"https://i.imgur.com/kcdBtuJ.jpeg",
"https://i.imgur.com/3HAPqiX.jpeg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("Do you need $100 to see the photo?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 0})
   var callback = () => api.sendMessage({body:`sweety baiman img ${link.length}\n-100 img`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
