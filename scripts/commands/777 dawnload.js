var configCommand = {
    name: 'autodownurls',
    version: '1.1.1',
    Permssion: 3,
    credits: 'Islamick Cyber Chat',
    prefix : true,
    description: 'dawnload url video',
    category: 'dawnload',
    usages: '[]',
    cooldowns: 3
},
    axios = require('axios'),
    downloader = require('image-downloader'),
    fse = require('fs-extra'),
  toolsFb = require('tools-fb'),
    path = __dirname + '/cache/statusAuto.json';

async function streamURL(url, mime) {
     const dest = `${__dirname}/cache/${Date.now()}.${mime}`;
    const name = global.utils.randomString(5) + '.' + mime;
     await downloader.image({
         url, dest
     });
     setTimeout(j => fse.unlinkSync(j), 60 * 1000, dest);
     return fse.createReadStream(dest);
    const res = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });
    res.data.path = name;
    return res.data;
};

function onLoad() {
    if (!fse.existsSync(path)) fse.writeFileSync(path, '{}');
};

async function noprefix(arg) {
    const s = JSON.parse(fse.readFileSync(path));
    if (arg.event.senderID == (global.botID || arg.api.getCurrentUserID())) return;
    if ((typeof s[arg.event.threadID] == 'boolean' && !s[arg.event.threadID])) return;

    const out = (a, b, c, d) => arg.api.sendMessage(a, b ? b : arg.event.threadID, c ? c : null, d ? d : arg.event.messageID),
        arr = arg.event.args,
        regEx_tiktok = /(^https:\/\/)((vm|vt|www|v)\.)?(tiktok|douyin)\.com\//,
        regEx_youtube = /(^https:\/\/)((www)\.)?(youtube|youtu)(PP)*\.(com|be)\//,
        regEx_facebook = /(^https:\/\/)(\w+\.)?(facebook|fb)\.(com|watch)\/\w+\/\w?(\/)?/,
        regEx_instagram = /^\u0068\u0074\u0074\u0070\u0073\u003a\/\/(www\.)?instagram\.com\/(reel|p)\/\w+\/\w*/

    for (const el of arr) {
        /* TỰ ĐỘNG TẢI VIDEO TIKTOK */
        if (regEx_tiktok.test(el)) {
            const data = (await axios.post(`https://dawnload-api.onrender.com/`, {
                url: el
            })).data.data;
            out({
                body: `====『 𝐓𝐈𝐊𝐓𝐎𝐊 𝐕𝐈𝐃𝐄𝐎 』====\n━━━━━━━━━━━━━━━━━━━━\n🕵️ 𝐓𝐚́𝐜 𝐠𝐢𝐚̉: ${data.author.nickname}\n🆔 𝐔𝐈𝐃: ${data.author.unique_id}\n🌐 𝐐𝐮𝐨̂́𝐜 𝐭𝐢̣𝐜𝐡: ${data.region}\n📌 𝐓𝐢𝐞̂𝐮 đ𝐞̂̀: ${data.title}\n❤️ 𝐋𝐮̛𝐨̛̣𝐭 𝐭𝐡𝐢́𝐜𝐡: ${data.digg_count}\n💬 𝐋𝐮̛𝐨̛̣𝐭 𝐛𝐢̀𝐧𝐡 𝐥𝐮𝐚̣̂𝐧: ${data.comment_count}\n🌐 𝐋𝐮̛𝐨̛̣𝐭 𝐜𝐡𝐢𝐚 𝐬𝐞̃: ${data.share_count}\n⬇️ 𝐋𝐮̛𝐨̛̣𝐭 𝐭𝐚̉𝐢: ${data.download_count}\n⏳ 𝐓𝐡𝐨̛̀𝐢 𝐥𝐮̛𝐨̛̣𝐧𝐠: ${data.duration} 𝐠𝐢𝐚̂𝐲\n━━━━━━━━━━━━━━━━━━━━\n✿ 𝐓𝐡𝐚̉ 𝐂𝐚̉𝐦 𝐗𝐮́𝐜 "🐧" 𝐂𝐡𝐮𝐲𝐞̂̉𝐧 𝐓𝐡𝐚̀𝐧𝐡 𝐀̂𝐦 𝐓𝐡𝐚𝐧𝐡 ✿`, attachment: await streamURL(data.play, 'mp4')
            }, '', (err, dataMsg) => global.client.handleReaction.push({
                name: 'autodownurl', messageID: dataMsg.messageID, url_audio: data.music
            })); // Video không logo thì sửa "wmplay" -> "play";
        };
        /* END */

        /* TỰ DỘNG TẢI VIDEO YOUTUBE */
        if (regEx_youtube.test(el)) {
            const data = (await axios.get(`https://dawnload-api.onrender.com/youtube?dlvideo=${el}`)).data.data,
                info = (a, b) => `===『 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐕𝐈𝐃𝐄𝐎 』===\n━━━━━━━━━━━━━━━━━━━━\n📌 𝐓𝐢𝐞̂𝐮 đ𝐞̂̀: ${a.title}\n⌛ 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 ${a.lengthSeconds}`;
            if (data.indexRange.contentLength < 26214400) out({
                body: (info(data, data.indexRange.contentLength)) + '\n━━━━━━━━━━━━━━━━━━━━\n✿ 𝐓𝐡𝐚̉ 𝐂𝐚̉𝐦 𝐗𝐮́𝐜 "🐧" 𝐂𝐡𝐮𝐲𝐞̂̉𝐧 𝐓𝐡𝐚̀𝐧𝐡 𝐀̂𝐦 𝐓𝐡𝐚𝐧𝐡 ✿' + `\n`, attachment: await streamURL(data.dataDownload.url, 'mp4')
            }, '', (err, datMsg) => global.client.handleReaction.push({
                name: 'autodownurl', messageID: datMsg.messageID, url_audio: data.dataDownload.url
            })); else if (data.indexRange.contentLength < 26214400) out({
                body: (info(data)) + `\n`, attachment: await streamURL(data.dataDownload.url, 'mp3')
            });
        };
        /* END */

        /* TỰ ĐỘNG TẢI VIDEO FACEBOOK */
            if (regEx_facebook.test(el)) out({
            attachment: await streamURL((fdl = (await axios.get(`https://dawnload-api.onrender.com/facebook/download?url=${el}`)).data.data, fdl.videos.hd), 'mp4'), body: `===『 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐕𝐈𝐃𝐄𝐎 』===\n━━━━━━━━━━━━━━━━━━`
        }, '', (err, dataMsg) => global.client.handleReaction.push({
                name: configCommand.name, messageID: dataMsg.messageID, url: fdl.videos.sd
            }));    
        /* END */

        if (regEx_instagram.test(el))out({
            attachment: await streamURL((idl = (await axios.get(`https://dawnload-api.onrender.com/Instagram/videodl?url=${el}`)).data.video_versions.url, idl[((irx = /\/p\//.test(el))?'display': 'video')+'_url']), irx?'jpg': 'mp4'), body: !irx?'→ 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 🐧 đ𝗲̂̉ 𝘁𝗮̉𝗶 𝗻𝗵𝗮̣𝗰.':''
        }, '', !irx?(err, dataMsg) => global.client.handleReaction.push({
                name: configCommand.name, messageID: dataMsg.messageID, url: idl.video_versions.url
            }): '');
    };
};
/* End Instagram Donwload*/
async function reactionMsg(arg) {
    if (arg.event.reaction == '🐧') // code
    {
        const out = (a, b, c, d) => arg.api.sendMessage(a, b ? b : arg.event.threadID, c ? c : null, d),
            _ = arg.handleReaction;
        if ('url_audio' in _) out({
            body: `『 𝐕𝐎𝐈𝐂𝐄 』`, attachment: await streamURL(_.url_audio, 'mp3')
        }, '', '', _.messageID);
    }
};
function runCommand(arg) {
    const out = (a, b, c, d) => arg.api.sendMessage(a, b ? b : arg.event.threadID, c ? c : null, d ? d : arg.event.messageID);
    const data = JSON.parse(fse.readFileSync(path));
    s = data[arg.event.threadID] = typeof data[arg.event.threadID] != 'boolean' || !!data[arg.event.threadID] ? false : true;
    fse.writeFileSync(path, JSON.stringify(data, 0, 4));
    out((s ? '『 𝐁𝐚̣̂𝐭 𝐀𝐮𝐭𝐨𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐔𝐑𝐋 』 ' : '『 𝐓𝐚̆́𝐭 𝐀𝐮𝐭𝐨𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐔𝐑𝐋 』 ') + ' ' + configCommand.name);
};

module.exports = {
    config: configCommand,
    onLoad,
    run: runCommand,
    handleEvent: noprefix,
    handleReaction: reactionMsg
};
