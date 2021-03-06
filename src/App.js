import React from 'react';
import Home from './Components/Home/Home';
import Cards from './Components/Cards/Cards';
import './App.css';
import axios from 'axios';

const GOT__URL = 'https://cors-anywhere.herokuapp.com/https://thronesapi.com/api/v2/Characters';


// const API__KEY = '?api_key=<9455f564-3386-4190-beee-47776f219b2a>'
// const API__URL = 'https://project-2-api.herokuapp.com'

class App extends React.Component {

  state = {
    characters: []
  }

  componentDidMount() {
    axios.get(`${GOT__URL}`)
    .then(res => {
      console.log('response: ', res.data)
      this.setState({
        characters: res.data
      })
    }
    )} 

  // componentDidUpdate(prevProps) {

  //   axios.get(`${GOT__URL}`)
  //   .then(res => {
  //     console.log(res.data)
  //     this.setState({
  //       characters: res.data
  //     })
  //   }
  //   )} 
  

  render() {
  return (
    <div className="App">
      <Home />
      <Cards characters={this.state.characters}/>
    </div>
  );
}
}

export default App;
