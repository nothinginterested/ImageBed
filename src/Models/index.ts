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


    }
};
export default Auth;
