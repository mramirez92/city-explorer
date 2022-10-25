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
      cityName: '',
      latitude:'',
      longitude:'',
      cityMap: '',
      error: false,
      errorMessage: ''

    }
  }

  handleInput= (event)=>{
      this.setState({
        city: event.target.value
      })
  }
  getCityData = async(event)=>{
    event.preventDefault();
    try{
      let url =`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

      
      
      let cityData= await axios.get(url);
      console.log(cityData.data);
      this.setState({
        cityName: cityData.data[0].display_name, 
        longitude: cityData.data[0].lon,
        latitude: cityData.data[0].lat,    
        error: false
      },
      () =>{
        this.getMapData();
    });

    }
    catch(error){
      this.setState({
        error:true,
        errorMessage: error.message
      })
    }

  }

  getMapData = async () => {
    let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.latitude},${this.state.longitude}&zoom=10`

 
    this.setState({
      cityMap: mapUrl,
    })
  }
  render(){
    console.log(this.state.city);
    return(
      <div>
      <Header/> 
      <FormCity
      getCityData={this.getCityData}
      handleInput={this.handleInput}
      />
      <Main
      lat={this.state.latitude}
      lon={this.state.longitude}
      city={this.state.cityName}
      map= {this.state.cityMap}

      />
     
      <Footer/>
      </div>
    );
  };
}

export default App;