export default {
  setUser :({commit},data={})=>{
    if(data){
      console.log('actions----------',data);
      commit('SET_USER',data)
    }
  },
  setLoginStatus:({commit},data={})=>{
    if(data){
      commit('SET_LOGINSTATUS',data);
        console.log('actions----------',data);
    }
  }
}
