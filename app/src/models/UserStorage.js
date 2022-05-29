"use strict";

class UserStorage {
    static #users = {
        id: ["1234", "12345", "123456"],
        psword: ["1234", "12345", "123456"],
        name: ["유저1", "유저2", "유저3"],
    };    

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, fields) =>{
            if (users.hasOwnProperty(fields)) {
                newUsers[fields] = users[fields];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, psword, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
    
    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success: true };
    }
}

module.exports = UserStorage;