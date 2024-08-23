module.exports.config = {
  name: "by",
  version: "1.0.0",
  permission: 2,
  credits: "Islamick Cyber Chat",
  description: "Leave the group",
  prefix: true,
  category: "Admin",
  usages: "out [id]",
  cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
      if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
      if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
}
