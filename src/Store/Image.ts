import {action, observable} from 'mobx';
import {Uploader} from '../Models'

class ImageStore {
    @observable filename=''
    @observable file=null
    @observable serverFile:any=null

    @action setFileName(newFileName:string){
        this.filename=newFileName
    }
    @action setFile(newFile:any){
        this.file=newFile
    }
    @action upload(){
        return new Promise((resolve, reject) => {
            Uploader.add(this.filename,this.file).then(
                serverfile=>{
                    this.serverFile=serverfile
                    resolve(serverfile)
                }
            ).catch(err=>{
                reject(err)
            }).finally(()=>{
                console.log('1111')
            })

        })
    }
}

export default new ImageStore()
