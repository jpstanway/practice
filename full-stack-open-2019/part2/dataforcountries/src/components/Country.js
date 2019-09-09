import React from "react";

const Country = ({
  country: { name, capital, population, languages, flag }
}) => {
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
    </li>
  );
};

export default Country;
