import {action, observable} from 'mobx';
import {Auth} from '../Models';
import AV, {User} from 'leancloud-storage';



class userStore {
    @observable currentUser :AV.User | null =null;

    @action setUser() {
        this.currentUser = Auth.fetchUser();

    }
}


export default new userStore();
