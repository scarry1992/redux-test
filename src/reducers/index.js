import { combineReducers } from 'redux';
import page from './page';
import user from './user'

// const initialState = {
//     name: 'Vasia',
//     surname: 'Pupkin',
//     age: 14
// };
//
// export default function userstate(state=initialState) {
//     return state;
// }

export  default combineReducers({
    page,
    user
})