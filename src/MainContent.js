import React, {Component} from 'react';
import TodoItem from './TodoItem'
import todosData from './todosData';
import Conditional from './Conditional'

// Suported events on React
// https://reactjs.org/docs/events.html#supported-events
class MainContent extends Component {

  constructor() {
    super()
    this.state = {
      imageCaption: "Loading...",
      count : 0,
      todos: todosData,
      isLoading: true
    }
    
    //bind method
    this.handleClick = this.handleClick.bind(this)
    this.imageMouseOver = this.imageMouseOver.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState({isLoading: true})
    // Faking a time lapse for the API call.
    setTimeout(() => {
      fetch("https://swapi.co/api/people/1/")
        .then(response => response.json())
        .then(data => this.setState({
          imageCaption: data.name,
          count : 0,
          todos: todosData,
          isLoading: false
        }))
    }, 1500)
  }

  // render is a reserved name for React
  /* Any time React notice that something changed, like state or props, 
    what may affect what React is supposed to display, it runs the render method ones again.*/
  render () {
    let todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return (
      <div>
        <h3>{this.state.imageCaption} - {this.state.count} &nbsp;
          <button onClick={this.handleClick}>Clique</button></h3>
        <img src="https://www.fillmurray.com/200/100" 
          alt="Fill Murray" onMouseOver={this.imageMouseOver} />
        {todoItems}
        <Conditional isLoading={this.state.isLoading} />
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
