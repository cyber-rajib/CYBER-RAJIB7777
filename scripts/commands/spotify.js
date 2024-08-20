/**
* @Shaon Ahmed 
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
  name: "janu",
  version: "1.0.0",
  Permssion: 0,
  credits: "Shaon Ahmed",//partner
  prefix: false,
  description: "Dont Change This    Credits Otherwisw Your Bot Lol",
  usages: "[ask]",
  Category: "SIM ✅",
  cooldowns: 2
};

module.exports.run = async ({ api, event,args }) => {
const axios = require("axios");
let query = args.join(" ");
if (!query)
    return api.sendMessage(`হুম জান বলো কি বলবা-!!❤️✌️`, event.threadID, event.messageID);
const res = await axios.get(`https://islamick-cyber-api.onrender.com/sim?type=ask&ask=${query}`);
var plaintext = res.data.answer;
api.sendMessage(plaintext, event.threadID, event.messageID)
}
