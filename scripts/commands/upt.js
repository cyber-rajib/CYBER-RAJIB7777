module.exports.config = {
	name:"upt",
	version: "1.0.0",
	Permssion: 0,
	credits: "Islamick Cyber Chat",
 Prefix:true,
	description: "uptime",
	Category: "ADMIN",
	cooldowns: 3,
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event }) => {
const pidusage = await global.nodemodule["pidusage"](process.pid);
const time = process.uptime(),
	      gio = Math.floor(time / (60 * 60)),
	      phut = Math.floor((time % (60 * 60)) / 60),
	    	giay = Math.floor(time % 60);
return api.sendMessage(`━━━━[ 𝗨𝗣𝗧𝗜𝗠𝗘 ]━━━━\n\n            ${gio} : ${phut} : ${giay}\n\n 𝗖𝗣𝗨: ${pidusage.cpu.toFixed(1)}\n 𝗥𝗔𝗠: ${byte2mb(pidusage.memory)}`, event.threadID, event.messageID);
    }
