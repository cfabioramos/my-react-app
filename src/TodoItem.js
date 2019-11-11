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

        return (
            <div>
                <input type="checkbox" checked={this.props.item.completed} />
                <p>{this.props.item.text + " - " + this.state.currence + this.props.item.cost}</p>
            </div>
        );
    }

}

export default TodoItem;