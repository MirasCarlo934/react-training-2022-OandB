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
      <TodoList items={todoList} todoList={todoList} setTodoList={setTodoList}/>
    </React.Fragment>
  );
}

function TodoList({items, todoList, setTodoList}) {
  return (
    <React.Fragment>
      {
        items.map(item => <Todo item={item} todoList={todoList} setTodoList={setTodoList}/>)
      }
    </React.Fragment>
  )
}

function Todo({item, todoList, setTodoList}) {
  return (
    <div className="card Todo-item">
      <div className="card-body">
        <h5>
          {item}
        </h5>
        <a onClick={() => setTodoList(todoList.filter(todo => todo !== item))} href="#" className="btn btn-outline-dark">remove</a>
        <a href="#" className="btn btn-outline-primary">mark as completed</a>
      </div>
    </div>
  )
}

export default TodoBasic;