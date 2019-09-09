import React, { useState, useEffect } from "react";
import axios from "axios";

import Country from "./components/Country";

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
          return <Country country={country} />;
        }

        return (
          <li key={country.name}>
            {country.name}{" "}
            <button onClick={() => setSearch(country.name)}>show</button>
          </li>
        );
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
