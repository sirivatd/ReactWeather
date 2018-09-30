import React from "react";

const Form = props => (
  <form id="weather-form" onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City..." />
    <input type="text" name="country" placeholder="Country" />
    <button id="submit-button">Get Weather</button>
  </form>
);

export default Form;
