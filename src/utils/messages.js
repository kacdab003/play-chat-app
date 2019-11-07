const generateMessage = (username, text) => ({
        username,
        text,
        createdAt: new Date().getTime(),
});
const generateLocationMessage = (username, locationURL) => ({
        username,
        locationURL,
        createdAt: new Date().getTime(),
});
module.exports = {
        generateMessage,
        generateLocationMessage,
};
