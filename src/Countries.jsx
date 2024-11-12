import Card from "./Card";
import { useEffect, useState } from "react";
function Countries() {
  // const countries = [1,2,3,4,5,6,7,8];
  const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";
  const [countries, setCountries] = useState([]);
  console.log(countries);

  // promise chaining
  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginLeft:"65px" }}>
      {countries.map(({abbr, flag, name}) => (      // we are using map, so the Key should be unique
        <Card key={abbr} flag={flag} name={name} />
      ))}
    </div>
  );
}

export default Countries;
