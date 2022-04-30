import axios from "axios";
import { Endpoint } from "../../../Utils";

export const loginSession = (payload) => async (dispatch) => {
    axios.post(Endpoint + '/auth/login', {
        // axios.post(Endpoint + '/auth/local', {
        username: payload.Username,
        password: payload.Password
    })
        .then(res => {
            console.log(res.data)

            if (res.status === 201) dispatch({ type: 'RESPONSE_LOGIN', payload: 'User tidak ditemukan' })
            if (res.status === 202) dispatch({ type: 'RESPONSE_LOGIN', payload: 'Password Salah' })
            if (res.status === 203) dispatch({ type: 'RESPONSE_LOGIN', payload: 'Kamu Belum Validasi \n Mohon Cek Email Kembali' })

            if (res.status === 200) {
                localStorage.setItem('session_user', JSON.stringify(res.data))
                // dispatch({ type: 'LOGIN_CHANGE', payload: true })

                return window.location.href = '/home'
            }

            return dispatch({ type: 'BTN_LOGIN_DISABLE', payload: false })
        })
        .catch(err => console.log(err))
}

export const loginGoogleSession = (payload) => async (dispatch) => {
    return new Promise((resolve, reject) => {
        axios.post(Endpoint + '/auth/google', payload)
            .then(res => {
                localStorage.clear('google_login')
                if (res.status === 200) {
                    localStorage.setItem('session_user', JSON.stringify(res.data))
                    // dispatch({ type: 'LOGIN_CHANGE', payload: true })

                    return window.location.href = '/home'
                }
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const retrieveUserSession = () => async (dispatch) => {

    const session = JSON.parse(localStorage.getItem("session_user"))

    if (session !== null) {
        axios.get(Endpoint + '/auth/status', {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `${session.data.jwt}`
            }
        })
            .then(res => {
                console.log(res);
                if (res.status == 200) {
                    dispatch({ type: 'LOGIN_CHANGE', payload: true })
                }
                dispatch({ type: 'PAGE_LOADING', payload: false })
            })
            .catch(err => {
                // console.log(err)
                dispatch({ type: 'PAGE_LOADING', payload: false })
            })

    } else {

        dispatch({ type: 'PAGE_LOADING', payload: false })
    }
}

export const LogoutSession = () => async (dispatch) => {
    // const session = JSON.parse(localStorage.getItem("session_user"))
    localStorage.removeItem("session_user")
    // dispatch({ type: 'LOGIN_CHANGE', payload: false })
    window.location.href = '/'
}

export const RegistrationSession = (payload) => async (dispatch) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: Endpoint + '/auth/signup',
            headers: {},
            data: {
                email: payload.email,
                nama: payload.nama,
                password: payload.password,
                notelp: payload.notelp,
                roles: ['USER']
            }
        })
            .then(res => {
                if (res.status == 200) {
                    resolve('success')
                } else if (res.status == 201) {
                    resolve('exits')
                }
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const manageUser = (payload) => async (dispatch) => {
    const session = JSON.parse(localStorage.getItem("session_user"))
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: Endpoint + payload.url,
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `${session.data.jwt}`
            },
            data: {
                nama: payload.nama,
                email: payload.email,
                notelp: payload.notelp,
                user_id: session.data.id
            }
        })
            .then(res => {
                if (res.status === 200) {
                    let data = {
                        auth: true,
                        data: {
                            id: session.data.id,
                            nama: payload.nama,
                            kode: session.data.kode,
                            email: payload.email,
                            notelp: payload.notelp,
                            jwt: session.data.jwt,
                            validasi: session.data.validasi,
                            gambar: session.data.gambar,
                            link: session.data.link
                        },
                        error: null,
                        message: 'Success'
                    }

                    localStorage.setItem('session_user', JSON.stringify(data))
                    return resolve(res.status)
                }
            })
            .catch(err => {
                return reject(err)
            })
    })
}

export const checkUser = (payload) => async (dispatch) => {
    const session = JSON.parse(localStorage.getItem("session_user"))
    axios({
        method: 'post',
        url: Endpoint + payload.url,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${session.data.jwt}`
        },
        data: {
            user_id: session.data.id
        }
    })
        .then(res => {
            // console.log(res);
            if (res.status === 200) {
                let data = {
                    auth: true,
                    data: {
                        id: session.data.id,
                        nama: session.data.nama,
                        kode: session.data.kode,
                        email: session.data.email,
                        notelp: session.data.notelp,
                        jwt: session.data.jwt,
                        validasi: session.data.validasi,
                        gambar: res.data.data.gambar,
                        link: session.data.link
                    },
                    error: null,
                    message: 'Success'
                }
                localStorage.setItem('session_user', JSON.stringify(data))

                window.location.reload()
            }
        })
        .catch(err => {
            console.log(err);
        })

}

export const uploadImage = (payload) => async (dispatch) => {
    const session = JSON.parse(localStorage.getItem("session_user"))
    let data = new FormData()
    data.append('kode', session.data.kode)
    data.append('user_id', session.data.id)
    data.append('image', payload.image)

    console.log(payload);

    axios({
        method: 'post',
        url: Endpoint + payload.url,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${session.data.jwt}`
        },
        data
    })
        .then(res => {
            if (res.status === 200) {
                console.log(res);
                dispatch(checkUser({ url: '/check/user', gambar: payload.image }, dispatch))
            }
        })
        .catch(err => {
            console.log(err);
        })
}

export const forgotPassword = (payload) => async (dispatch) => {
    return new Promise((resolve, reject) => {
        axios.get(Endpoint + payload.url, {
            params:{
                email: payload.email
            }
        })
            .then(res => {
                if (res.status == 200) {
                    return resolve(res)
                }

            })
            .catch(err => {
                reject(err)
            })
    })
}