import React, {useEffect, useRef, useState} from "react";

function TodoBasic() {
  const itemCount = useRef(0);
  const txt = useRef();
  const txtFilter = useRef();
  const [todoList, setTodoList] = useState([]);
  const [todoListFiltered, setTodoListFiltered] = useState([]);

  function addTodo() {
    const newTodo = {
      id: itemCount.current,
      text: txt.current.value
    }
    let tempList = [...todoList, newTodo];
    setTodoList(tempList);
    setTodoListFiltered(tempList);
    itemCount.current = itemCount.current + 1;
  }

  function removeTodo(todo) {
    let tempList = todoList.filter(tempTodo => tempTodo.id !== todo.id);
    setTodoList(tempList);
    setTodoListFiltered(tempList);
  }

  function handleKeyUp(event) {
    if (event.key === 'Enter') {
      addTodo();
    }
  }

  function filterList() {
    let filterExpr = txtFilter.current.value;
    let tempArr = todoList.filter(todo => todo.text.includes(filterExpr));
    setTodoListFiltered(tempArr);
  }

  return (
    <React.Fragment>
      <h1>My GTD</h1>
      <input type="text" ref={txt} placeholder="type something here" onKeyUp={handleKeyUp}/>
      <button onClick={addTodo}>Add</button>
      <br/>
      <input type="text" ref={txtFilter} placeholder="filter" onChange={filterList} onKeyUp={filterList}/>
      <TodoList items={todoListFiltered} onRemoveItem={removeTodo}/>
    </React.Fragment>
  );
}

function TodoList({items, onRemoveItem}) {
  return (
    <React.Fragment>
      {
        items.map(item => <Todo item={item} onRemove={onRemoveItem}/>)
      }
    </React.Fragment>
  )
}

function Todo({item, onRemove}) {
  return (
    <div className="card Todo-item">
      <div className="card-body">
        <h5>
          {item.text}
        </h5>
        <a onClick={() => onRemove(item)} href="#" className="btn btn-outline-dark">remove</a>
      </div>
    </div>
  )
}

export default TodoBasic;