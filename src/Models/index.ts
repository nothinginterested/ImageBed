import AV, {User} from 'leancloud-storage';

AV.init({
    appId: 'eMi9KzUA9zcTTbPBMkdSK6Dw-gzGzoHsz',
    appKey: 'jhMHYcxkt8EMAS4IxwlC5RAH',
    serverURL: 'https://emi9kzua.lc-cn-n1-shared.com'
});

const Auth = {
    register(username: string, userpassword: string) {
        const user = new User();
        user.setUsername(username);
        user.setPassword(userpassword);
        return new Promise((resolve, reject) => {
            user.signUp().then(
                (user) => {
                    console.log(user);
                    resolve(user);
                }, (error) => {
                    console.log(error);
                }
            );
        });
    },
    login(username: string, userpassword: string) {
        return new Promise((resolve, reject) => {
            AV.User.logIn(username, userpassword).then(
                (user) => {
                    resolve(user);
                }, (error) => {
                    reject(error);
                });

        });

    },
    fetchUser() {
        return AV.User.current();
    }
};


const Uploader = {
    add(fileName: string, file: any) {
        const item = new AV.Object('Image');
        const avFile = new AV.File(fileName, file);
        item.set('filename', fileName);
        item.set('owner', AV.User.current());
        item.set('url', avFile);
        return new Promise<AV.Object>((resolve, reject) => {
            item.save().then((serverFile:AV.Object) => resolve(serverFile), error => reject(error));
        });


    }
};
export {Auth, Uploader};
