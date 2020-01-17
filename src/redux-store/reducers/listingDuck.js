import * as LISTING_DATA from './../../dataStore/listingData'

export const types = {
    UPDATE_LIST: 'UPDATE_LIST'
}

const initialState = {
    listingData: LISTING_DATA.shows
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_LIST:
            return {
                ...state,
                listingData: action.payload
            }
        default: return state
    }
}

export const actions = {
    filterList: value => dispatch => {
        if(!value){
            dispatch(actions.updateShowList(LISTING_DATA))
            return
        }
        const inputValue = value.trim().toLowerCase()
        const inputLength = inputValue.length
        const updatedList = LISTING_DATA.shows.filter(show => show.value.toLowerCase().slice(0, inputLength) === inputValue)
        dispatch(actions.updateShowList(updatedList))
    },
    updateShowList: (list) => ({ type: types.UPDATE_LIST, payload: list})
}