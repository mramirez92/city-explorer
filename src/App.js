import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer.js';
import FormCity from './FormCity.js';
import Weather from './Weather.js';
import Movie from './Movie.js'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityName: '',
      lat: '',
      lon: '',
      cityMap: '',
      error: false,
      errorMessage: '',
      weatherData: [],
      movie:[]

    }
  }

  handleInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }
  getCityData = async (event) => {
    event.preventDefault();
    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

      let cityData = await axios.get(url);

      console.log(cityData.data);


      // this.getCityWeather(cityToDisplay);
      this.setState({
        cityName: cityData.data[0].display_name,
        lon: cityData.data[0].lon,
        lat: cityData.data[0].lat,
        error: false
      },
        this.makeApiCalls);

    }
    catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      });
    }
  }
  makeApiCalls = async function () {
    this.getMapData();
    this.getCityWeather();
    this.getMovie();
  }
  getCityWeather = async () => {
    console.log('weather here');
    try {
      let weatherData = await axios.get(`${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.city}&lat=${this.state.lat}&lon=${this.state.lon}`)
      this.setState({
        weatherData: weatherData.data
      })
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }
  getMovie = async () =>{
    try{
      let movieData = await axios.get(`${process.env.REACT_APP_SERVER}/movies?movieCity=${this.state.city}`)
      this.setState({
        movie:movieData.data
      })

    }catch(error){
      this.setState({
       error:true,
      errorMessage: error.message 
      })     
    }
  }

  getMapData = async () => {
    let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=10`


    this.setState({
      cityMap: mapUrl,
    })
  }
  render() {
    console.log(this.state);
    return (
      <div className="Div">
        <Header className="Header" />
        <FormCity
        className= "FormCity"
          getCityData={this.getCityData}
          handleInput={this.handleInput}
        />
        {this.state.weatherData.length > 0 &&
          <Main className="Main"
            lat={this.state.lat}
            lon={this.state.lon}
            city={this.state.cityName}
            map={this.state.cityMap}

          />
          
        }
        <Weather 
        className="Weather"
        weather={this.state.weatherData}
        />
        <Movie
        movie={this.state.movie}/>
        <Footer className="Footer" />
      </div>
    );

  };

};
export default App;

