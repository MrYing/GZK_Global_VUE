import Local from 'local';

export default {
  /* 设置用户信息 */
  SET_USER(state,data){
    // state.user.nickName = data.nickName;
      Object.assign(state.user,data)
      console.log('mutations------------state',state)

      Local.setItem('vuex',state)
  },
  /* 设置 登录状态 */
  SET_LOGINSTATUS(state,data){
    console.log('mutations--------isLogin----',data.isLogin)
    state.user.isLogin = data.isLogin;
    Local.setItem('vuex',state)
  },
  /* 设置物流列表 */
  SET_LOGISTICSDATA(state,data){
    console.log('执行到mutations',data);
    Object.assign(state.logisticsData,data);//保证传进来的是一个对象
    Local.setItem('vuex',state) //Local.setItem 是这是本地存储 两个参数 第一个 是存储的名字 第二个是值
  },
}
