/**
 * 消息控制 ，需加密处理
 * Created by binli on 2016-11-04.
 */

import {gmc} from './gzk_script_coder';
import Base64 from './gzk_script_coder';



import  'jQuery';


function gzkMSGCtrl() {

    var self = this;

    var selfGMCoder = new Base64();
    var strServerAppURL = "http://gcmmsg.guozk.com/gcm_msg_proc.jsp";
    // var strServerAppURL = "http://192.168.80.138:8084/GCM-Service/gcm_msg_proc.jsp";
    var arrayMsgBindList = [];

    /**
     * 绑定消息到函数
     * @param intMsgID 消息编号
     * @param strFunCallBack 回调的函数名称
     */
    this.doBindMsg = function (intMsgID, strFunCallBack) {
        self.doUnBindMsg(intMsgID);
        // arrayMsgBindList.push("{'intMsgID':"+intMsgID+",'strFunCallBack':'"+strFunCallBack+"'}");
        arrayMsgBindList.push({"intMsgID": intMsgID, "strFunCallBack": strFunCallBack});
    };

    /**
     * 解绑消息函数
     * @param intMsgID 消息编号
     */
    this.doUnBindMsg = function (intMsgID) {
        var intTempUnBindIndex = doFindMsgBindList(intMsgID);
        if (intTempUnBindIndex > -1) {
            arrayMsgBindList.splice(intTempUnBindIndex);
        }
    };

    /**
     * 获取消息函数绑定数组
     * @returns {Array}
     */
    this.doGetMsgBindList = function () {
        return arrayMsgBindList;
    };

    function doFindMsgBindList(ingFindMsgID) {
        var intReturn = -1;
        $.each(arrayMsgBindList, function (intIndex, objValue) {
            if (objValue.intMsgID == ingFindMsgID) {
                intReturn = intIndex;
            }
        });
        return intReturn;
    }

    /**
     * 发送消息到App服务器
     * @param strMsgSend 消息内容
     */
    this.doSendAppMsg = function (strMsgSend) {
        console.log('111',strMsgSend)
        $.post(strServerAppURL,
            {
                gcm: new Base64().encode(strMsgSend)
            },
            function (data, status) {
                if (status === "success") {
                    doMsgCallBack(eval("(" + new Base64().decode(data) + ")"));
                } else {
                    doMsgCallBack("");
                }

            });
    };

    /**
     * 发送消息到 BCom 服务器
     * @param strMsgSend
     */
    this.doSendBComMsg = function (strMsgSend) {

        jQuery(document).ready(function () {
            $.ajax({
                type: "POST",
                crossDomain: true,
                url: strServerBComURL,
                data: "gzkmsg=" + strMsgSend,
                dataType: "text",
                success: function (strMsgACK) {
                    doMsgCallBack(eval("(" + strMsgACK + ")"));
                },
                error: function (a, b, c) {
                    doMsgCallBack("");
                }
            });
        });
    };

    function doMsgCallBack(jsonRoot) {
        if (jsonRoot != "") {
            var intMsgBindIndex = -1;
            intMsgBindIndex = doFindMsgBindList(jsonRoot.intMsgID - 1);
            if (intMsgBindIndex > -1) {
                var tempCallBackFun = arrayMsgBindList[intMsgBindIndex].strFunCallBack;
                if (tempCallBackFun != null) {
                    tempCallBackFun(jsonRoot);
                }
            }
        }

    }

}
export default gzkMSGCtrl = gzkMSGCtrl
