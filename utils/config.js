const oss = { //aliyun OSS config
    uploadImageUrl: "https://keguanyoujuan.oss-cn-beijing.aliyuncs.com",
    OSSAccessKeyId: "LTAId54a2rznFnwg",
    AccessKeySecret: "yU1Ulu29YPHro8pCpjWiAzfz0dMpZ8",
    timeout: 87600, //这个是上传文件时Policy的失效时间
};
const request = {
    api_base_url: "https://keguanyoujuan.com/api/v1/"
}

const map = {
    key: "BYGBZ-UHGKW-BU6RO-OGGHR-XDJTK-BGFGJ",
    url: 'https://apis.map.qq.com/ws/geocoder/v1/'
}


export {
    oss,
    request,
    map
}