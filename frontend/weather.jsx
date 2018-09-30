import React from "react";

const Weather = props => (
  <div id="weather-details">
    {props.city &&
      props.country && (
        <p>
          <span id="category">Location:</span> {props.city}, {props.country}
        </p>
      )}

    {props.temperature && (
      <p>
        {" "}
        <span id="category">Temperature:</span> {props.temperature}
      </p>
    )}
    {props.humidity && (
      <p>
        {" "}
        <span id="category">Humidity:</span> {props.humidity}
      </p>
    )}

    {props.description && (
      <p>
        {" "}
        <span id="category">Conditions:</span> {props.description}
      </p>
    )}

    {props.error && <p>{props.error}</p>}
  </div>
);

export default Weather;
