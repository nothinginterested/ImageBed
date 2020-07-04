import {action, computed, observable, toJS} from 'mobx';
import {Uploader} from '../Models';
import AV, {User} from 'leancloud-storage';
import { tsModel3 } from '../custom';

class ImageStore {
    @observable filename = '';
    @observable file = null;
    @observable serverFile: tsModel3 | null= null;
    @observable saveFile: any={a:'111'};

    @action setFileName(newFileName: string) {
        this.filename = newFileName;
    }

    @action setFile(newFile: any) {
        this.file = newFile;
    }

    @action upload() {
        return new Promise((resolve, reject) => {
            Uploader.add(this.filename, this.file).then(
                (serverfile: AV.Object) => {

                    this.serverFile = serverfile.toJSON();
                    this.saveCurrentFile();
                    resolve(serverfile);
                }
            ).catch(err => {
                reject(err);
            }).finally(() => {
            });

        });
    }

    @action saveCurrentFile() {
        window.sessionStorage.setItem('_Image', JSON.stringify(this.serverFile));
    }

    @action fetchCurrentFile() {
        const xx = window.sessionStorage.getItem('_Image');
        let file = null;
        if (xx) {
            file = JSON.parse(xx);

        }
        this.serverFile = file;

    }
    @computed get url(){
        return toJS(this.serverFile)?.url.url
    }
}

export default new ImageStore();
