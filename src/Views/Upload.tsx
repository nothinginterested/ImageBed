import React, {useEffect} from 'react';
import {Upload, message} from 'antd';
import {InboxOutlined} from '@ant-design/icons';
import {useStore} from '../Store';
import {RcFile} from 'antd/lib/upload';
import {observer} from 'mobx-react';
import {UploadChangeParam} from 'antd/lib/upload/interface';
import styled from 'styled-components';

const {Dragger} = Upload;
const  Sectionx=styled.section`
  background: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 50%;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
`
const Image=styled.img`
    max-width: 500px;
`



const UploadX = observer(() => {
    const {ImageStore, UserStore} = useStore();

    useEffect(() => {
        UserStore.setUser();
        ImageStore.fetchCurrentFile()

    }, []);
    const props = {
        showUploadList: false,
        beforeUpload: (file: RcFile) => {
            ImageStore.setFile(file);
            ImageStore.setFileName(file.name);
            if (UserStore.currentUser === null) {
                message.warning('还没有登录');
                return false;
            }
            ImageStore.upload().then((serverfile) => {
                    console.log('上传成功');
                    message.info('上传成功')

                }
            ).catch(err => {
                console.log(err);
            });
            return false;
        }
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
            {ImageStore.serverFile ?

                <Sectionx>
                    <h1>上传结果</h1>
                    <dl>
                        <dt>线上地址</dt>
                        <dd><a href={ImageStore.url}/> {ImageStore.url}</dd>
                        <dt>图片预览</dt>
                        <dd>
                            <Image src={ImageStore.url}/>
                        </dd>
                    </dl>
                </Sectionx>
                : null

            }


        </div>


    );

});
export default UploadX;
