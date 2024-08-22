module.exports = {
    config: {
        name: "removebg",
        version: "1.0.0",
        permission: 0,
        credits: "Nayan",
        description: "Background Remove",
        prefix: true,
        category: "prefix",
        usages: "reply",
        cooldowns: 10,
    },

    start: async function({ nayan, events, args, NAYAN }) {
        const axios = require("axios");
        const fs = require("fs-extra");
        const path = require("path");

        // Check if the event is a reply and contains an image
        if (events.type !== "message_reply" || 
            !events.messageReply.attachments || 
            events.messageReply.attachments.length === 0 || 
            events.messageReply.attachments[0].type !== "photo") {
            return nayan.reply("[❌] Please reply to a photo", events.threadID, events.messageID);
        }

        const imageUrl = events.messageReply.attachments[0].url;
        const apiEndpoint = `https://mostakim-api.onrender.com/removebg?input=${encodeURIComponent(imageUrl)}`;

        try {
            // Call the API to remove the background
            const response = await axios.get(apiEndpoint, { responseType: 'arraybuffer' });
            
            if (response.status !== 200) {
                throw new Error(`API responded with status code ${response.status}`);
            }

            const imageBuffer = Buffer.from(response.data);

            // Ensure the cache directory exists
            const cachePath = path.join(__dirname, "cache");
            if (!fs.existsSync(cachePath)) {
                fs.mkdirSync(cachePath);
            }

            // Write the image file to disk
            const imagePath = path.join(cachePath, "removebg.jpg");
            fs.writeFileSync(imagePath, imageBuffer);

            // Send the image back
            const allimage = [fs.createReadStream(imagePath)];
            NAYAN.react("✅");
            await nayan.reply({
                body: "🖼️=== [ REMOVED BACKGROUND ] ===🖼️",
                attachment: allimage
            }, events.threadID, events.messageID);

            // Optionally clean up the cache directory
            fs.unlinkSync(imagePath);

        } catch (error) {
            console.error("Error processing the image:", error);
            return nayan.reply("[❌] There was an error processing the image", events.threadID, events.messageID);
        }
    }
}
