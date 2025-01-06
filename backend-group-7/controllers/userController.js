import User from '../model/userModel.js';

export const createUser = (username, email, password, phone) => {
    const user = User.create({username, email, password, phone});
    return "user created";
};

export const findUser = (username, password) => {
    const result = User.findOne({where: { username: username, password: password }});
    return result;
};

export const updateUser = (username, newUsername, newpassword, newPhone) => {
    const result = User.update({username: newUsername, password: newpassword, phone: newPhone}, {where: {username: username}});
    return result;
};

export const deleteUser = (username) => {
    const result = User.destroy({where: {username: username}});
    return result;
};