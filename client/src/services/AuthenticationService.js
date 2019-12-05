import Api from '@/services/Api'

export default {
  register (params) {
    return Api().post('register', params)
  }
}

// This is how it will function
// AuthenticationServices.register({
//     email: 'test@gmail.com',
//     password: '1235'
// })
