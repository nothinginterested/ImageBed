import React from 'react';
import {Upload, message} from 'antd';
import {InboxOutlined} from '@ant-design/icons';
import {useStore} from '../Store';
import {RcFile} from 'antd/lib/upload';
import {observer} from 'mobx-react';

const {Dragger} = Upload;
const UploadX = observer(() => {
    const {ImageStore,UserStore} = useStore();
    const props = {
        beforeUpload: (file: RcFile) => {
            ImageStore.setFile(file);
            ImageStore.setFileName(file.name)
            if(UserStore.currentUser===null){
                message.warning('还没有登录')
                return false
            }
            ImageStore.upload().then((serverfile)=>{
                    console.log('上传成功');
                    console.log(serverfile);

                }
            ).catch(err=>{
                console.log(err);
            })
            return false;
        },
    };
    return (
        <div>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined/>
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                </p>
            </Dragger>,


        </div>


    );

});
export default UploadX;
