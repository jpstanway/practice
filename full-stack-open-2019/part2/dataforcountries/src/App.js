import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => setCountries(res.data));
  }, []);

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  const renderCountries = () => {
    const countriesToRender = countries
      .filter(
        country =>
          country.name.toLowerCase().includes(search.toLowerCase()) &&
          search.length > 0
      )
      .map((country, idx, arr) => {
        if (arr.length === 1) {
          return (
            <li key={country.name}>
              <h1>{country.name}</h1>
              <p>capital {country.capital}</p>
              <p>population {country.population}</p>
              <h2>languages</h2>
              <ul>
                {country.languages.map(language => (
                  <li key={language.name}>{language.name}</li>
                ))}
              </ul>
              <img
                src={country.flag}
                alt="flag"
                style={{ maxWidth: "150px", marginTop: "30px" }}
              />
            </li>
          );
        }

        return <li key={country.name}>{country.name}</li>;
      });

    if (countriesToRender.length > 10) {
      return <li>Too many matches, be more specific</li>;
    }

    return countriesToRender;
  };

  return (
    <div>
      <div>
        find countries{" "}
        <input type="text" value={search} onChange={handleSearch} />
      </div>
      <div>
        <ul style={{ listStyle: "none" }}>{renderCountries()}</ul>
      </div>
    </div>
  );
};

export default App;
