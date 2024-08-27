import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=fa086d751c6ef296c8a0d044285fc2a7`;
  //   console.log(url);
  //${dallas}lat={lat}&lon={lon}

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
        setLocation("");
      });
    }
  };

  return (
    <div className="wrap">
      <div className="inputWrap">
        <input
          className="input"
          placeholder="Search Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchLocation}
          type="text"
        />
      </div>
      <div className="temp">
        <p>{data.name}</p>
        {data.main ? <h1>{data.main.temp}°F</h1> : null}
        {data.weather ? <p>{data.weather[0].main}</p> : null}
      </div>
      {data.name !== undefined && (
        <div className="suggestWrap">
          <div className="suggest">
            <div className="box">
              {data.main ? <p>{data.main.feels_like}°F</p> : null}
              {/* <p className="para">70</p> */}
              <p>Feels like</p>
            </div>
            <div className="box">
              {data.main ? <p>{data.main.humidity}%</p> : null}
              {/* <p className="para">20%</p> */}
              <p>Humidity</p>
            </div>
            <div className="box">
              {data.wind ? <p>{data.wind.speed}MPH</p> : null}

              {/* <p className="para">12MPH</p> */}
              <p>High Speed</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
