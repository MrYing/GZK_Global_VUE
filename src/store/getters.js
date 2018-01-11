export default {
    getUser : state => {
      console.log('getter-----------',state)
      return state.user
    },
    getLoginStatus: state => {

        return state.user.isLogin

    }
}
