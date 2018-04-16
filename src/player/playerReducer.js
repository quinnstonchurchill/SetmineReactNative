import * as types from '../actionTypes'

const initialState = {
    isPlaying: false,
    currentSet: null,
    currentArtist: null,
    currentTrack: null,
    timeElapsed: 0,
    setLength: 0,
    tracks: [],
    artistImage: null,
    isFavorited: false
}

export default function (state = initialState, action = {}) {
    switch (action.type) {
        default:
            return state
    }
}
