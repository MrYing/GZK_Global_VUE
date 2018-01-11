/**
 * GZK APP API 2017-03-16 10:21
 */
import {doGCMMsgCreate} from './gzk_script_coder'
var intSetLngID=1;
window.intSetLngID=intSetLngID;

class GetMsg {
  constructor() {

  }



// gcmMsg_204_ForgotPassword
    doCreate_gcmMsg_204_ForgotPassword(intSetLngID, strAccountNumber_Set){
        var returnJson = doGCMMsgCreate(204);
        returnJson.intLngID = intSetLngID
        returnJson.strAccountNumber = strAccountNumber_Set ;

        return JSON.stringify(returnJson);

    }

    // gcmMsg_200_UserLogin
   doCreate_gcmMsg_200_UserLogin(intSetLngID, strUserName_Set, strUserPasswd_Set, strAccessIP_Set, intClientVersion_Set, intClientOSType_Set){
    var returnJson = doGCMMsgCreate(200);
    returnJson.intLngID = intSetLngID
    returnJson.strUserName = strUserName_Set ;
    returnJson.strUserPasswd = strUserPasswd_Set ;
    returnJson.strAccessIP = strAccessIP_Set ;
    returnJson.intClientVersion = intClientVersion_Set ;
    returnJson.intClientOSType = intClientOSType_Set ;

    return JSON.stringify(returnJson);
}

// gcmMsg_202_ChangePassword
doCreate_gcmMsg_202_ChangePassword(intSetLngID, strUserSysID_Set, strOldUserPasswd_Set, strNewUserPasswd_Set){
    var returnJson = doGCMMsgCreate(202);
    returnJson.intLngID = intSetLngID
    returnJson.strUserSysID = strUserSysID_Set ;
    returnJson.strOldUserPasswd = strOldUserPasswd_Set ;
    returnJson.strNewUserPasswd = strNewUserPasswd_Set ;

    return JSON.stringify(returnJson);
}

// gcmMsg_206_ChangeUserAlias
doCreate_gcmMsg_206_ChangeUserAlias(intSetLngID, strUserSysID_Set, strUserAlias_Set){
    var returnJson = doGCMMsgCreate(206);
    returnJson.intLngID = intSetLngID
    returnJson.strUserSysID = strUserSysID_Set ;
    returnJson.strUserAlias = strUserAlias_Set ;

    return  JSON.stringify(returnJson);
}



// gcmMsg_208_GetContainerList
 doCreate_gcmMsg_208_GetContainerList(intSetLngID, strUserSysID_Set, intQueryType_Set, strSearchContent_Set, intPageIndex_Set){
    var returnJson = doGCMMsgCreate(208);
    returnJson.intLngID = intSetLngID
    returnJson.strUserSysID = strUserSysID_Set ;
    returnJson.intQueryType = intQueryType_Set ;
    returnJson.strSearchContent = strSearchContent_Set ;
    returnJson.intPageIndex = intPageIndex_Set ;
     return  JSON.stringify(returnJson);
}

// gcmMsg_210_GetContainerDetail
 doCreate_gcmMsg_210_GetContainerDetail(intSetLngID, strContainerSysID_Set, strUserSysID_Set){
    var returnJson = doGCMMsgCreate(210);
    returnJson.intLngID = intSetLngID
    returnJson.strContainerSysID = strContainerSysID_Set ;
    returnJson.strUserSysID = strUserSysID_Set ;

     return  JSON.stringify(returnJson);
}




    /**
   * 消息 300
   * GZKMsg_300_UserLogin
   * 用户登录
   * 真实消息 电话 货主 1801，车主 1701 密码 1
   * @param floatGPSLat GPS Lat  0.0
   * @param floatGPSLng GPS Lng  0.0
   * @param strUserPasscode 用户密码 用户密码必须经过 MD5+Base64 编码后才能发送到后台，测试初期可以使用通用密码 111 登录，后台判断 111 直接允许任何用户登录 111
   * @param strUserPhoneNumber 用户电话
   * @returns {string}
   */
  doGetMsg_300(floatGPSLat, floatGPSLng, strUserPasscode, strUserPhoneNumber) {
    return "{'GZKMSG':[{" +
      "'intMsgID':300," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'strUserPasscode':'" + strUserPasscode + "'," +
      "'strUserPhoneNumber':'" + strUserPhoneNumber + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }







}

export default new GetMsg()


