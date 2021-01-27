// cargamos el método de Redux para
// poder combinar reducers
import { combineReducers } from 'redux'

function todos(state = [], action) {
  switch(action.type) {
  case 'ADD_TODO':
    // creamos una copia del state actual
    const copy = Array.from(state)
    // modificamos lo que necesitamos
    copy.push(action.payload.text)
    // retornamos el nuevo state
    return copy
  default:
    // si el action.type no existe o no concuerda
    // con ningunos de los casos definidos
    // devolvemos el estado sin modificar
    return state
  }
}

// combinamos nuestros reducers
// los keys que usemos para nuestros reducers
// van a ser usados como keys en nuestro store
// en este ejemplo sería: { todos: [], }
const reducers = combineReducers({
    todos,
});

export default reducers