import React from "react";
import Titles from "./titles";
import Form from "./form";
import Weather from "./weather";

const API_KEY = "a9d2c07597e80a46ddb818aea2e50c95";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    };
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    )
      .then(res => res.json())
      .then(resString => {
        if (city && country) {
          this.setState({
            temperature: resString.main.temperature,
            city: resString.name,
            country: resString.sys.country,
            humidity: resString.main.humidity,
            description: resString.weather[0].description,
            error: ""
          });
        } else {
          this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Please input valid values"
          });
        }
      });
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
