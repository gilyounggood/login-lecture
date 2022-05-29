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
}

module.exports = UserStorage;