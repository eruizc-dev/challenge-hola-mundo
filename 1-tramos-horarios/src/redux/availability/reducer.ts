import { Action } from '../types';

// Todo: move into database
const initialState = {
    "08:00": 8,
    "08:30": 8,
    "09:00": 8,
    "09:30": 8,
    "10:00": 8,
    "10:30": 8,
    "11:00": 8,
    "11:30": 8,
    "12:00": 8,
    "12:30": 8,
    "13:00": 8,
    "13:30": 8,
    "14:00": 8,
    "14:30": 8,
    "15:00": 8,
    "15:30": 8,
    "16:00": 8,
    "16:30": 8,
    "17:00": 8,
    "17:30": 8,
    "18:00": 8,
    "18:30": 8,
    "19:00": 8,
    "19:30": 8,
    "20:00": 8
}

export default
function reducer(state = initialState, action: Action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}
