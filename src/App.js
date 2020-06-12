import React, { Component } from 'react'
//import logo from './logo.svg';
import './App.css';
// import EventClick from './components/EventBind'
// import ParentComponent from './components/ParentComponent'
// import UserGreeting from './components/UserGreeting'
// import NameList from "./components/NameList"
//import Form from './components/FormationVaildation'
// import FormationVaildation from './components/FormationVaildation';
//import Fragment from './components/frament';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

//class component
class App extends Component {

  constructor() {

    super();

    this.state = {
      monsters : [],
      searchField: '',
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => this.setState({ monsters: users}));
  }
  
  handleChange = (e) => {
    this.setState({ searchField:e.target.value })
  }

  render() {
    const {monsters, searchField} =  this.state; 
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>Monsters Rolodex </h1>
        <SearchBox placeholder='search monsters' 
        handleChange={ this.handleChange }
        />
        <CardList monsters={filteredMonsters}/>
      </div>

    );
  }
}

export default App;
