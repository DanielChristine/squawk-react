import axios from 'axios'
import $ from 'jquery'
import { FLOCK_REQUEST, ACCEPT_FLOCK, DECLINE_FLOCK, REMOVE_FLOCK, CANCEL_FLOCK } from "./types"

export const flockRequest = (usernameOrEmailAddress) => dispatch => {
    const JsonWT = localStorage.getItem("JWT");
    const config = {
        method: 'put',
        url: 'http://localhost:5000/api/users/request-friend',
        headers: { 'x-auth-token': JsonWT },
        data: { usernameOrEmailAddress: usernameOrEmailAddress }
    }

  axios(config).then(res => {dispatch({
            type: FLOCK_REQUEST,
            payload: res.data
        }) 
    })
}

export const acceptFlock = (usernameOrEmailAddress) => dispatch => {
    const JsonWT = localStorage.getItem("JWT");
    const config = {
        method: 'put',
        url: 'http://localhost:5000/api/users/accept-friend-request',
        headers: { 'x-auth-token': JsonWT },
        data: { usernameOrEmailAddress: usernameOrEmailAddress }
    }

  axios(config).then(res => {dispatch({
            type: ACCEPT_FLOCK,
            payload: res.data
        }) 
    })
}

export const declineFlock = (usernameOrEmailAddress) => dispatch => {
    const JsonWT = localStorage.getItem("JWT");
    const config = {
        method: 'put',
        url: 'http://localhost:5000/api/users/decline-friend-request',
        headers: { 'x-auth-token': JsonWT },
        data: { usernameOrEmailAddress: usernameOrEmailAddress }
    }

  axios(config).then((res) => {
    dispatch({
      type: DECLINE_FLOCK,
      payload: res.data,
    });
  });
}


export const removeFlock = (usernameOrEmailAddress) => dispatch => {
    const JsonWT = localStorage.getItem("JWT");
    const config = {
        method: 'put',
        url: 'http://localhost:5000/api/users/remove-friend',
        headers: { 'x-auth-token': JsonWT },
        data: { usernameOrEmailAddress: usernameOrEmailAddress }
    }

  axios(config).then(res => {dispatch({
            type: REMOVE_FLOCK,
            payload: res.data
        }) 
    })
}

export const cancelFlock = (usernameOrEmailAddress) => dispatch => {
    const JsonWT = localStorage.getItem("JWT");
    const config = {
        method: 'put',
        url: 'http://localhost:5000/api/users/remove-friend',
        headers: { 'x-auth-token': JsonWT },
        data: { usernameOrEmailAddress: usernameOrEmailAddress }
    }

  axios(config)
    .then(res => {
        dispatch({
            type: CANCEL_FLOCK,
            payload: res.data
        }) 
    })
}

