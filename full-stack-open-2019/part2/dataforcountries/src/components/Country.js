import React, { useState, useEffect } from "react";
import axios from "axios";

const Country = ({
  country: { name, capital, population, languages, flag }
}) => {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.apixu.com/v1/current.json?key=a9f4a65f23624465b6805127190909&q=${capital}`
      )
      .then(res => setWeather(res.data));
  }, []);

  const renderWeather = () => {
    if (weather) {
      return (
        <div>
          <h2>Weather in {capital}</h2>
          <p>
            <strong>temperature:</strong> {weather.current.temp_c} Celsius
          </p>
          <img src={weather.current.condition.icon} alt="weather icon" />
          <p>
            <strong>wind:</strong> {weather.current.wind_kph} kph direction{" "}
            {weather.current.wind_dir}
          </p>
        </div>
      );
    }
    return <div></div>;
  };
  console.log(weather);
  return (
    <li key={name}>
      <h1>{name}</h1>
      <p>capital {capital}</p>
      <p>population {population}</p>
      <h2>languages</h2>
      <ul>
        {languages.map(language => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img
        src={flag}
        alt="flag"
        style={{ maxWidth: "150px", marginTop: "30px" }}
      />
      {renderWeather()}
    </li>
  );
};

export default Country;
