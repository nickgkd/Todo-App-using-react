import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList'
import TodoItems from './TodoItems';

class App extends Component {
  constructor(){
    super()
    this.state={
      items:[],
      currentItem: {text:'',key:''},
    }
  }

  handleInput = e => {
    const itemtext = e.target.value
    const currentItem = {text:itemtext,key:Date.now()}
    this.setState({
      currentItem,
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if(newItem.text!==''){
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items:items,
        currentItem:{text:'',key:''}
      })
    }
  }

updateItem = (key,text) =>{
  const currentItem = {text:text,key:key}
    this.setState({
      currentItem
    })
  console.info(key+""+text)
  
}

updateList = (key) =>{
  console.log("Andy>"+key);
  let varh=this.state.currentItem.text; // Updated Value
  let newItemList=[];
  this.state.items.forEach(item=>{
    
    //console.log(">>>Test"+item.key);
    //console.log(">>>text"+item.text);

      console.log(item.key);

      if(item.key===key){
        //console.info("==============================>>>>>>>>>",key)
        item.text=varh;
        newItemList[item.key]=item.text;
      }else{
        newItemList[item.key]=item.text;
      }
      console.log(newItemList);
      //newItemList.push(item);
  })
  console.info("updated Item: ",newItemList);
  this.setState({
    items: newItemList
  });
}

  deleteItem = key => {
    const filteredItems = this.state.items.filter(items => {
      return items.key!==key
    })

    this.setState({
      items:filteredItems,
    })
  }

 

  render() {  
    return (
      <div className="App">      
      <TodoList addItem={this.addItem}
         inputElement={this.inputElement}
         handleInput={this.handleInput}
         currentItem={this.state.currentItem} 
         updateList={this.updateList} />
         <TodoItems entries={this.state.items}
           deleteItem={this.deleteItem}
           updateItem={this.updateItem} 
         />
       </div>
    )
  }
}



export default App;
