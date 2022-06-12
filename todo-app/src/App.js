import React, { useCallback, useRef, useReducer } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': //새로추가
      // {type: 'INSERT', todo : { id: 1, text: 'todo', checked: false}}
      return todos.concat(action.todo);

    case 'REMOVE': //제거
      //{ type: 'REMOVE', id: 1 }
      return todos.filter((todo) => todo.id !== action.id);

    case 'TOGGLE': //토글
      // {type: 'TOGGLE', id: 1 }
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  //const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };

    dispatch({ type: 'INSERT', todo });
    //setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    //setTodos((todos) => todos.filter((todo) => todo.id !== id));
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    /*setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );*/
    dispatch({ type: 'TOGGLE', id });
  }, []);
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
