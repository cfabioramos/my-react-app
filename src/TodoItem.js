import React, {Component} from 'react';

class TodoItem extends Component {

    constructor() {
        super()
        this.state = {
            currence: "R$ "
        }
    }

    // Life cycle method that essentially says "you are just born"
    componentDidMount() {
        console.log('Nasceeeeeeu')
    }

    /*Life cycle method, that runs when someone gives you a gift.
    This component could be receiving properties from the parent component
    and any time this component is receiving props it will run this method.
    */
   // it is deprecated
   // in version 17 it will be completely removed
   UNSAFE_componentWillReceiveProps(nextProps){
        //example
//        if (nextProps.whatever !== this.props.whatever){
            // do something important here
//        }        
    }

    // called before render, to decide if is to call render or not
    // it gives the possibility to make the application more performed
    shouldComponentUpdate(nextProps, nextState) {
        // return true if want it to update, or false if not
    }

    /* Before the component unmount from screen, or disappears all together.
    The main usecase for it is to do some clean or tear down for anything that you have setup
    in your application or DOM.*/
    componentWillUnmount() {

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