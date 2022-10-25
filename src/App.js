import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer.js';
import FormCity from './FormCity.js';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      city:'',
      cityData: [],
      latitude:'',
      longitude:'',
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
      let url =`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`
      
      let cityData= await axios.get(url);
      console.log(cityData.data);
      this.setState({
        cityData: cityData.data[0], 
        longitude: cityData.data[0].lon,
        latitude: cityData.data[0].lat,    
        error: false
      })

    }
    catch(error){
      this.setState({
        error:true,
        errorMessage: error.message
      })
    }

  }
  render(){
    return(
      <div>
      <Header/>
      <Main/>
      <FormCity
      onsubmit={this.getCityData}
      onInput={this.handleInput}
      />
      <Footer/>
      </div>
    );
  };
}

export default App;
