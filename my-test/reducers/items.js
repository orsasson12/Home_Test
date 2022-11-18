import { FETCH_ALL, FETCH_ITEM } from '../constants/actionsTypes.js'

export default (state = { items: [] }, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return {
                ...state,
                items: action.payload
            }
        case FETCH_ITEM:
            return {
                ...state,
                item: action.payload
            }
        default: return { ...state }
    }
}