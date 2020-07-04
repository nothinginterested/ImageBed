import React from 'react';
import {action, observable} from 'mobx';
import {Auth} from '../Models';
import user from './user';
type TInfo ={
    username:string,
    password:string

}

class AuthStore {
    @observable values: TInfo = {
        username: '',
        password: ''
    };

    @action setUsername(username: string) {
        this.values.username = username;
    }

    @action setUserpassword(password: string) {
        this.values.password = password;
    }

    @action register() {
        return new Promise((resolve, reject) => {
            Auth.register(this.values.username, this.values.password).then(
                user => {
                    console.log('111');
                }
            );
        });
    }

    @action login() {
        return new Promise((resolve, reject) => {
            Auth.login(this.values.username, this.values.password
            ).then((user) => {
                console.log(user);
                resolve(user);
            }, (error) => {
                console.log('hhhhh');
                reject(error);

            });

        });

    }
    @action logout(){
        Auth.logout()
        user.resetUser()
    }

}

export default new AuthStore();
