const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 3, // insert가 호출 될때마다 1씩 더해짐

export const insert = text => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false
  }
});

export const toggle = id => ({
  type: TOGGLE,
  id
});

export const rename = id => ({
  type: REMOVE,
  id
});


const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false
    }
  ]
}

function todos(state = initialState, action){
  switch(action.type){
    case CHANGE_INPUT:
      return{
        ...state,
        input: action.input
      }
    case TOGGLE:
      return{
        ...state,
        todos: state.todos.concat(action.todo)
      }
    case TOGGLE:
      return{
      ...state,
      todos: state.todos.map(todo => 
        todo.id === action.id ? {...todo, done: !todo.done} : todo
        )
      }
    case REMOVE:
      return{
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
    default: 
      return false;
  }
}