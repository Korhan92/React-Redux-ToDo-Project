import { ADD, DELETE, EDIT } from "../action/UpdateList";

export default function allTodo(state=[],{type,payload}) {
    let newState = [...state]
    let newFilterState =[...state]
    
    switch(type) {
        case ADD:
          return [...state,payload];
          case EDIT:
            newState[payload.index]=payload.content;
          return newState;
          case DELETE:
            newFilterState.splice(payload.index,1)
            console.log(newFilterState)
          return newFilterState;
        default:
          return state;
      }

 }