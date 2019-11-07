const users = [];

// addUser
// removeUser
// getUser
// getUsersInRoom
const addUser = ({ id, username, room }) => {
        // Clean the data
        username = username.trim().toLowerCase();
        room = room.trim().toLowerCase();
        if (!username || !room) {
                return {
                        error: 'Username and room are required',
                };
        }
        // checkForExistingUser
        const existingUser = users.find(user => user.room === room && user.username === username);
        if (existingUser) {
                return {
                        error: 'Username is in use!',
                };
        }
        const user = { id, username, room };
        users.push(user);
        return { user };
};

const removeUser = id => {
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
                return users.splice(userIndex, 1)[0];
        }
};

const getUser = id => {
        const searchedUser = users.find(user => user.id === id);
        if (searchedUser !== -1) {
                return searchedUser;
        }
        return undefined;
};
const getUsersInRoom = room => {
        const usersInRoom = users.filter(user => user.room === room);
        return usersInRoom;
};
module.exports = {
        addUser,
        removeUser,
        getUser,
        getUsersInRoom,
};
