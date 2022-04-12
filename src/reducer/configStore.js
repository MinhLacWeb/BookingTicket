import { combineReducers, createStore } from "redux";
import {BookingTicketReducer} from './BookingTicketReducer'

const rootReducer = combineReducers({
    BookingTicketReducer:BookingTicketReducer
})

export const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());