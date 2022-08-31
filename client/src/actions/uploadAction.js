import * as UploadApi from '../api/UploadRequest.js'
import S3 from 'react-aws-s3'



export const uploadS3 = async (file, name) => {
    const config = {
        bucketName: process.env.REACT_APP_BUCKET_NAME,
        region: process.env.REACT_APP_BUCKET_REGION,
        accessKeyId: process.env.REACT_APP_BUCKET_ACCESS,
        secretAccessKey: process.env.REACT_APP_BUCKET_SECRET,
    }    

    const ReactS3Client = new S3(config);

    const newFileName = name;
    // the name of the file uploaded is used to upload it to S3
    await ReactS3Client
        .uploadFile(file, newFileName)
        .then(data => console.log(data.location))
        .catch(err => console.error(err))
}


export const uploadImage = (data) => async (dispatch) => {
    
    try {
        await UploadApi.uploadImage(data)
    } catch (error) {
        console.log(error)
    }
}

export const uploadPost = (data) => async(dispatch) => {
    dispatch({type: "UPLOAD_START"})

    try {
        const newPost = await UploadApi.uploadPost(data)
        dispatch({type: "UPLOAD_SUCCESS", data: newPost.data})
    } catch (error) {
        console.log(error)
        dispatch({type: "UPLOAD_FAIL"})
    }
}