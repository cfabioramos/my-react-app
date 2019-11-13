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
      isLoading: true,
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "",
      favorateColor: "blue"
    }
    
    //bind method
    this.handleClick = this.handleClick.bind(this)
    this.imageMouseOver = this.imageMouseOver.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleInputsFormChange = this.handleInputsFormChange.bind(this)
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
      /* About forms: React constantly keep track of all the information in "state", 
          which means that each key stroke updates state, 
          then we always have the most updated version of what the user is typping into the form.
          This means that the state is being Reactive.
          More about forms: https://reactjs.org/docs/forms.html 
          An excellant library to deal with forms: Formik
      */
      <div>
        <div><img src="https://www.fillmurray.com/200/100" 
          alt="Fill Murray" onMouseOver={this.imageMouseOver} />
          {this.state.imageCaption} - {this.state.count} &nbsp;
          <button onClick={this.handleClick}>Clique</button></div>

          <form onSubmit={this.handleSubmit}>
            <p><input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleInputsFormChange} /> 
            &nbsp; <input type="text" name="lastName"  value={this.state.lastName} placeholder="Last Name" onChange={this.handleInputsFormChange} />
            &nbsp; {this.state.firstName} {this.state.lastName} is {this.state.gender} and his color is {this.state.favorateColor}</p>
            <p><textarea value={"Some default value..."} onChange={this.handleInputsFormChange} /> </p>
            <p>
              <label>
                <input type="checkbox" name="isFriendly" 
                  checked={this.state.isFriendly} 
                  onChange={this.handleInputsFormChange} /> Is friendly?
              </label>
              <label>
                <input type="radio" name="gender" value="male" 
                  checked={this.state.gender === "male"}
                  onChange={this.handleInputsFormChange} /> Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" 
                  checked={this.state.gender === "female"}
                  onChange={this.handleInputsFormChange} /> Female
              </label>
            </p>
            <p>
              <label>Favorite Color:</label>&nbsp;
              <select name="favorateColor" value={this.state.favorateColor} 
                onChange={this.handleInputsFormChange}>
                  <option value=""></option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="black">Black</option>
              </select>
              &nbsp;<button>Submit</button>
            </p>
          </form>

        {todoItems} 
        <Conditional isLoading={this.state.isLoading} />
      </div>
    );
  }

  //  any time you create a class method that you need to use setState you need to bind this method as I did in the constructor
  handleClick() {
    this.setState({imageCaption : "Right image caption"});
  }

  handleInputsFormChange(event) {
//    event.target.type === "checkbox" ? 
//    this.setState({[event.target.name]: event.target.checked}) :
//    this.setState({[event.target.name]: event.target.value})
//  or better
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
  }
  
  imageMouseOver() {
    this.setState(prevState => {
      return {
        imageCaption: "Changed caption",
        count: prevState.count + 1
      }
    });
  }

  handleSubmit(event) {
    alert(event)
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
