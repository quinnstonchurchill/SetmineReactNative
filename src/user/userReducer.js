// import * as types from '../actionTypes'

const initialState = {
    isPro: false,
    isLoggedIn: false,
    favorites: [],
    following: [],
    recentlyPlayed: []
}

export default function (state = initialState, action = {}) {
    switch (action.type) {
        default:
            return state
    }
}
