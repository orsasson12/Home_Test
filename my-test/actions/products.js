import * as api from '../api'
import { FETCH_ALL, FETCH_ITEM } from '../constants/actionsTypes'



export const getItems = (page, category) => async (dispatch) => {
    
    try {
        const { data } = await api.fetchItems(page, category)
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error);
    }
}


