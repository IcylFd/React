import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM,  INIT_LIST_ACTION, GET_INIT_LIST } from "./actionTypes";
import axios from 'axios';

export const getChangeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddTodoItem = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteTodoItem = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

//redux-thunk
// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('/todolist.json')
//       .then((res) => {
//         const data = res.data;
//         const action = initListAction(data);
//         dispatch(action);
//     })
//     .catch()
//   }
// }

export const getInitList = () => ({
  type: GET_INIT_LIST
})