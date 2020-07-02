import React from 'react';
import {action, observable} from 'mobx';
import Auth from '../Models';


class AuthStore {
    @observable values:TInfo={
        username:'',
        password:''
    }
    @action setUsername(username:string){
        this.values.username=username
    }
    @action setUserpassword(password:string){
        this.values.password=password
    }

    @action register(){
        return new Promise((resolve, reject) =>{
            Auth.register(this.values.username,this.values.password).then(
                user=>{
                    console.log('111');
                }

            )
        } )
    }

}
export default  new AuthStore()
