import React, {useRef, useState} from "react";

function TodoBasic() {
  const txt = useRef();
  const [todoList, setTodoList] = useState([]);

  function addTodo() {
    setTodoList([...todoList, txt.current.value]);
  }

  function handleKeyUp(event) {
    if (event.key === 'Enter') {
      addTodo();
    }
  }

  return (
    <React.Fragment>
      <h1>My GTD</h1>
      <input type="text" ref={txt} placeholder="type something here" onKeyUp={handleKeyUp}/>
      <button onClick={addTodo}>Add</button>
      <TodoList items={todoList}/>
    </React.Fragment>
  );
}

function TodoList({items}) {
  return (
    <ul>
      {
        items.map(item => <li>{item}</li>)
      }
    </ul>
  )
}

export default TodoBasic;