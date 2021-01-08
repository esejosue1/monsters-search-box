import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import { render } from '@testing-library/react';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    };
  }

  //using mount everytime the app opens,
  //converting the website into json
  //move the name from the json into monster[]
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users') 
  .then(response => response.json())
  .then(users=> this.setState({monsters:users}))
}

handleChange = e =>{
  this.setState({searchField: e.target.value});
}

render() {
  const {monsters, searchField}=this.state;
  //same as const monsters=this.state.monsters
  //const searchField= this.state.seachField
  const filteredMonsters=monsters.filter
  (monster =>
    monster.name.toLowerCase().includes
    (searchField.toLocaleLowerCase()));

  return (
    <div className="App">
      <h1>Monsters Search Box</h1>
      <SearchBox 
        placeholder='search for a monster'
        handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}
}

export default App;
