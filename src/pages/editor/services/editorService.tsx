import request from "../../../../utils/request";
import {message} from "antd";

export const saveTemplate = async (name: string, desc: string, pointData: any) => {
    // console.log(name, desc, JSON.stringify(pointData))
    const {data}: {data: any} = await request.post('/template/save', {
        data: {
            name,
            desc,
            content: pointData
        }
    })

    // console.log(data)
    if (data.result === 'success') {
        message.info('保存模板成功!')
    } else {
        message.error('保存模板失败!')
    }
}

export const downloadFile = async (socketId: string, pointData: any) => {
    // console.log(pointData.length)
    // console.log(socketId)
    const {data} = await request.post('/download', {
        socketId,
        pointData
    })

    if (data.result === 'success') {
        message.info('生成文件成功!')
    } else {
        message.error('生成文件失败!')
    }
}