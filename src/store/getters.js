let getters = {
  getPhone (state) {
    if (localStorage.getItem('WYIMUSICINFO')) {
      state = JSON.parse(localStorage.getItem('WYIMUSICINFO'))
    }
    return state.phone
  },
  getEmail (state) {
    if (localStorage.getItem('WYIMUSICINFO')) {
      state = JSON.parse(localStorage.getItem('WYIMUSICINFO'))
    }
    return state.email
  },
  getKey (state) {
    if (localStorage.getItem('WYIMUSICINFO')) {
      state = JSON.parse(localStorage.getItem('WYIMUSICINFO'))
    }
    return state.key
  },
  getPassword (state) {
    if (localStorage.getItem('WYIMUSICINFO')) {
      state = JSON.parse(localStorage.getItem('WYIMUSICINFO'))
    }
    return state.password
  },
  getRefresh (state) {
    if (localStorage.getItem('WYIMUSICINFO')) {
      state = JSON.parse(localStorage.getItem('WYIMUSICINFO'))
    }
    return state.refresh
  },
  getNickname (state) {
    if (localStorage.getItem('WYIMUSICINFO')) {
      state = JSON.parse(localStorage.getItem('WYIMUSICINFO'))
    }
    return state.nickname
  },
  getMusicUrl (state) {
    if (localStorage.getItem('WYIMUSICINFO')) {
      state = JSON.parse(localStorage.getItem('WYIMUSICINFO'))
    }
    return state.musicUrl
  }
}

export default getters
