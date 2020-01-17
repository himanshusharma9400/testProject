export const types = {
    SHOW_SEARCH_BAR: 'SHOW_SEARCH_BAR',
    HIDE_SEARCH_BAR: 'HIDE_SEARCH_BAR',
    SHOW_BACK_BUTTON: 'SHOW_BACK_BUTTON',
    HIDE_BACK_BUTTON: 'HIDE_BACK_BUTTON',
    SHOW_NAV_BAR: 'SHOW_NAV_BAR',
    HIDE_NAV_BAR: 'HIDE_NAV_BAR'
}

const initialState = {
    searchBarState : true,
    backButtonState: false,
    navBarVisible: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_SEARCH_BAR:
            return {
                ...state,
                searchBarState: true
            }
        case types.HIDE_SEARCH_BAR:
            return {
                ...state,
                searchBarState: false
            }
        case types.SHOW_BACK_BUTTON:
            return {
                ...state,
                backButtonState: true
            }
        case types.HIDE_BACK_BUTTON:
            return {
                ...state,
                backButtonState: false
            }
        case types.SHOW_NAV_BAR:
            return {
                ...state,
                navBarVisible: true
            }
        case types.HIDE_NAV_BAR:
            return {
                ...state,
                navBarVisible: false
            }
        default:
            return state
    }
}

export const actions = {
    showSearchBar: () => ({ type: types.SHOW_SEARCH_BAR }),
    hideSearchBar: () => ({ type: types.HIDE_SEARCH_BAR }),
    showBackButton: () => ({ type: types.SHOW_BACK_BUTTON }),
    hideBackButton: () => ({ type: types.HIDE_BACK_BUTTON }),
    showNavBar: () => ({ type: types.SHOW_NAV_BAR }),
    hideNavBar: () => ({ type: types.HIDE_NAV_BAR }),
}

