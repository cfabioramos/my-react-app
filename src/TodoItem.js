import React, {Component} from 'react';

class TodoItem extends Component {

    constructor() {
        super()
        this.state = {
            currence: "R$ "
        }
    }

    render() {
        if (this.props.item.completed)
            this.state.currence = "$ "
        else 
            this.state.currence = "R$ "

        return (
            <div>
                <input type="checkbox" 
                    checked={this.props.item.completed} 
                    onChange={() => this.props.handleChange(this.props.item.id)}/>
                <p>{this.props.item.text + " - " + this.state.currence + this.props.item.cost}</p>
            </div>
        );
    }

}

export default TodoItem;