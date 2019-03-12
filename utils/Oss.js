import Http from '../http/Http.js'

class Oss {




    /**
     * @img_arr:            上传图片路径数组
     */
    chossImages(img_arr, callBack) {
        wx.chooseImage({
            count: 5 - img_arr.length,
            sizeType: ['compressed'],
            sourceType: ['album', 'camera'],
            success: function(res) {
                console.log('上传图片前', res.tempFilePaths)
                callBack(img_arr.concat(res.tempFilePaths))
            }
        })
    }

    /**
     * 图片预览
     */
    imagePreview(current, img_arr) {
        wx.previewImage({
            current: current,
            urls: img_arr
        })
    }

    /**
     * @comment_id:     评论ID
     * @img_arr:            上传图片路径
     */
    uploadAliyunImages(comment_id, img_arr, callBack) {
        uploadImage({
            filePath: that.data.img_arr,
            dir: "images/comment/", //OSS上传的存储目录
            success: function(res) {
                console.log("上传成功", res)
                callBack(res)
            },
            fail: function(res) {
                console.log("上传失败", res)
            }
        })
    }


}
export {
    Oss
}