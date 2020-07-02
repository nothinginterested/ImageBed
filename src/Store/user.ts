import {action, observable} from 'mobx';
import Auth from '../Models';

class userStore {
    @observable user={};

    @action setUser() {
        this.user = Auth.fetchUser();

    }
}


export default new userStore()
