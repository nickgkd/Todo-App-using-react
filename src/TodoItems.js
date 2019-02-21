
import React, { Component } from 'react'
import TodoList from './TodoList'
import App from './App'

 class TodoItems extends Component {
    createTasks = item => {
        return(
            // <div>
            //     <ul>
            //         {this.props.map(items => (
            //             <li key={item.key} > {item.text} <button onClick={this.updateText} >Update</button> <button onClick={() => this.props.deleteItem(item.key)} >Delete</button> </li>
            //         ))}
            //     </ul>
            // </div>
        <li key={item.key} > {item.text} <button onClick={() => this.props.updateItem(item.key,item.text)} >Update</button> <button onClick={() => this.props.deleteItem(item.key)} >Delete</button></li>
        );
        //<li key={item.key} > {item.text} <button onClick={this.updateText} >Update</button> <button onClick={() => this.props.deleteItem(item.key)} >Delete</button></li>
       
    }

    

    render() {
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks)
        return <ul className="theList">{listItems}</ul>
    }
}

export default TodoItems