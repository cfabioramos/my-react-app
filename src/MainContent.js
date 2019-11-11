import React from 'react';

import TodoItem from './TodoItem'
import todosData from './todosData';

function handleClick() {
  alert('Funfa');
}

// Suported events on React
// https://reactjs.org/docs/events.html#supported-events

function MainContent() {

  const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)

  return (
    <div>
      {todoItems}
      <br />
      <button onClick={handleClick}>Clique</button>
    </div>
  );
}

export default MainContent;
