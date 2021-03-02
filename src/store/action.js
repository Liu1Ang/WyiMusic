// 异步处理操作，调用mutation中的方法
let actions = {
  // 调用this.$store.commit('newNum',sum)
  setToken (state, newVal) {
    state.token = newVal
    localStorage.setItem('WYIMUSICINFO', JSON.stringify(state))
  },
  setUserId (state, newVal) {
    state.userId = newVal
    localStorage.setItem('WYIMUSICINFO', JSON.stringify(state))
  },
  setPhone (state, newVal) {
    state.phone = newVal
    localStorage.setItem('WYIMUSICINFO', JSON.stringify(state))
  },
  setEmail (state, newVal) {
    state.email = newVal
    localStorage.setItem('WYIMUSICINFO', JSON.stringify(state))
  },
  setKey (state, newVal) {
    state.key = newVal
    localStorage.setItem('WYIMUSICINFO', JSON.stringify(state))
  },
  setPassword (state, newVal) {
    state.password = newVal
    localStorage.setItem('WYIMUSICINFO', JSON.stringify(state))
  },
  setRefresh (state, newVal) {
    state.refresh = newVal
    localStorage.setItem('WYIMUSICINFO', JSON.stringify(state))
  },
  setNickname (state, newVal) {
    state.nickname = newVal
    localStorage.setItem('WYIMUSICINFO', JSON.stringify(state))
  },
  setMusicUrl (state, newVal) {
    state.musicUrl = newVal
    localStorage.setItem('WYIMUSICINFO', JSON.stringify(state))
  }
}

export default actions
