import axios from "axios";

axios.defaults.timeout = 60000
axios.defaults.baseURL = 'https://61e6e443ce3a2d001735950d.mockapi.io/api/v1/'

axios.interceptors.request.use( function ( config )  {

    return config
}, function (err) {
    return Promise.reject(err) // return err
})


//sau khi request xong
axios.interceptors.response.use( function ( response )  {
   return response
}, function (err) {
    // day laf vd
    if(err.response.status === 403)  {
        // throw 'Server inter'
    } 
})

export default axios