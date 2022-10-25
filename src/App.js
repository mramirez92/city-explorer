import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer.js';
import FormCity from './FormCity.js';
// import Axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      city:'',
      cityData: [],
      error: false,
      errorMessage: ''

    }
  }
  handleInput= (event)=>{
      event.preventDefault();
      this.setState= {
        city: event.target.value
      }
  }
  getCityData = async(event)=>{
    event.preventDefault();
    try{

    }
    catch(error){

    }

  }
  render(){
    return(
      <div>
      <Header/>
      <Main/>
      <FormCity/>
      <Footer/>
      </div>
    );
  };
}

export default App;
