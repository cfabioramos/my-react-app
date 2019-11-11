import React, {Component} from 'react';
import TodoItem from './TodoItem'
import todosData from './todosData';

// Suported events on React
// https://reactjs.org/docs/events.html#supported-events
class MainContent extends Component {

  constructor() {
    super()
    this.state = {
      imageCaption: "Image caption",
      count : 0,
      todos: todosData
    }
    
    //bind method
    this.handleClick = this.handleClick.bind(this)
    this.imageMouseOver = this.imageMouseOver.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
 
  // render is a reserved name for React
  render () {
    let todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return (
      <div>
        <h3>{this.state.imageCaption} - {this.state.count}</h3>
        <img src="https://www.fillmurray.com/200/100" alt="Fill Murray" onMouseOver={this.imageMouseOver} />
        {todoItems}
        <br />
        <button onClick={this.handleClick}>Clique</button>
      </div>
    );
  }

  //  any time you create a class method that you need to use setState you need to bind this method as I did in the constructor
  handleClick() {
    this.setState({imageCaption : "Right image caption"});
  }
  
  imageMouseOver() {
    this.setState(prevState => {
      return {
        imageCaption: "Changed caption",
        count: prevState.count + 1
      }
    });
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        imageCaption: "Image caption",
        count : 0,
        todos: updatedTodos
      }

    })
  }

}

export default MainContent;
