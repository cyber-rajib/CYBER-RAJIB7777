module.exports.config = {
  name: "albam",
  version: "1.0.3",
  permssion: 0,
  credits: "islamick Cyber Chat",
  prefix:true,
  description: "Random video",
  category: "short video",
  cooldowns: 5,
  dependencies: {
    axios: ""
  }
}, module.exports.run = async function({
  event: e,
  api: a,
  args: n
}) {
  if (!n[0]) return a.sendMessage("•—»✨「 𝐕𝐈𝐃𝐄𝐎 」✨«—•\n•┄┅════❁🌺❁════┅┄•\n𝟏. 𝐈𝐒𝐋𝐀𝐌𝐈𝐊 𝐕𝐈𝐃𝐄𝐎🌺✨ \n𝟐. 𝐋𝐎𝐕𝐄 𝐕𝐈𝐃𝐄𝐎 🤗😌\n𝟑.𝐒𝐔𝐑𝐀 𝐕𝐈𝐃𝐄𝐎 💫\n𝟒. 𝐒𝐓𝐀𝐓𝐔𝐒 𝐕𝐈𝐃𝐄𝐎💌\n𝟓. 𝐒𝐓𝐎𝐑𝐘 𝐕𝐈𝐃𝐄𝐎 😻😊\n𝟔.𝐒𝐀𝐃 𝐕𝐈𝐃𝐄𝐎 🥹💙\n𝟕. 𝐀𝐋𝐎𝐍 𝐕𝐈𝐃𝐄𝐎 🙂💔\n𝟖. 𝐍𝐀𝐓𝐔𝐑𝐀𝐋 𝐕𝐈𝐃𝐄𝐎 🌿🕊️\n𝟗.𝐒𝐎𝐍𝐆 𝐒𝐓𝐎𝐑𝐘 𝐕𝐈𝐃𝐄𝐎 🖤🥀 \n𝟏𝟎.𝐈𝐒𝐋𝐀𝐌𝐈𝐂𝐊 𝐙𝐎𝐎𝐍✨🧡 \n𝟏𝟏.𝐗𝐌𝐋 𝐁𝐀𝐁𝐘 𝐕𝐈𝐃𝐄𝐎💜💛 \n𝟏𝟐.𝐂𝐔𝐓𝐄 𝐂𝐀𝐓 𝐕𝐈𝐃𝐄𝐎🙀😻\n𝟏𝟑.𝐖𝐎𝐑𝐋𝐃 𝐕𝐈𝐃𝐄𝐎🌍\n𝟏𝟒.𝐂𝐀𝐑𝐓𝐎𝐎𝐍 𝐕𝐈𝐃𝐄𝐎 🐻\n𝟏𝟓.𝐀𝐍𝐈𝐌𝐄 𝐕𝐈𝐃𝐄𝐎 🤡☠️\n\n•┄┅════❁🌺❁════┅┄•\n\nTell me how many video numbers you want to see by replaying this message", e.threadID, ((a, n) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: n.messageID,
      author: e.senderID,
      type: "create"
    })
  }), e.messageID)
}, module.exports.handleReply = async ({
  api: e,
  event: a,
  client: n,
  handleReply: t,
  Currencies: s,
  Users: i,
  Threads: o
}) => {
  var { p, h } = linkanh();

  if ("create" === t.type) {
    const n = (await p.get(h)).data.data;
    let t = (await p.get(n, {
      responseType: "stream"
    })).data;
    return e.sendMessage({
      body: "𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐈𝐍𝐆 𝐘𝐎𝐔 𝐕𝐈𝐃𝐄𝐎 \n𝐅𝐑𝐎𝐌\n\n｢𝐈𝐒𝐋𝐀𝐌𝐈𝐂𝐊 𝐂𝐇𝐀𝐓｣",
      attachment: t
    }, a.threadID, a.messageID)
  }

    function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
            var h = "https://islamick-video-api.replit.app/video/islamck";
        else if ("2" == a.body)
         var   h = "https://islamick-cyber-chat-api-sagocol333.replit.app/vdremix";
        else if ("3" == a.body)
         var   h = "https://islamick-video-api.replit.app/video/sura";
        else if ("4" == a.body)
          var  h = "https://islamick-cyber-chat-api-sagocol333.replit.app/vdtrai";
        else if ("5" == a.body)
          var  h = "https://api.xaikoimran.repl.co/video/story";
        else if ("6" == a.body)
          var  h = "https://api.xaikoimran.repl.co/video/sad";
        else if ("7" == a.body)
          var  h = "https://api.xaikoimran.repl.co/video/alon";
        else if ("8" == a.body)
          var  h = "https://api.xaikoimran.repl.co/video/natural";
        else if ("9" == a.body)
         var   h = "https://api.xaikoimran.repl.co/video/storysong";
        else if ("10" == a.body)
         var  h = "https://api.xaikoimran.repl.co/video/time";
         else if ("11" == a.body)
         var  h = "https://api.xaikoimran.repl.co/video/baby";
         else if ("12" == a.body)
         var  h = "https://rajib-api.islam500.repl.co/vdtrai";
         else if ("13" == a.body)
         var  h = "https://api.xaikoimran.repl.co/video/word";
         else if ("14" == a.body)
         var  h =
"https://api.xaikoimran.repl.co/video/cartoon";
           else if ("15" == a.body)
         var  h =
"https://videos-api--xaikoimran.repl.co/video/anime";
        return { p, h };
    }
};