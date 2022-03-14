export const ADD= "ADD"
export const EDIT ="EDIT"
export const DELETE = "DELETE"



export function addTodo(content) {
    return {
        type: ADD,
        payload: content,
      };
}
 export function editTodo(content,index) {
    return {
        type: EDIT,
        payload: {content:content, index:index},
      };
}
 export function deleteTodo(content,index) {
    return {
        type: DELETE,
        payload: {content:content, index:index},
      };
}