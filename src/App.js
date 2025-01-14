import React, { useEffect, useState } from "react";
import "./App.css";
import Imaginer from "./Imaginer"
import axios from "axios";

function App() {
  const [data, setData] = useState({
    "copyright": "\n\nDavid Malin (AAO),\nAATB, \nROE,\nUKS Telescope\n",
    "date": "1999-01-15",
    "explanation": "The Orion Nebula and its surroundings present skygazers with a wondrous jumble of newborn stars, gas, and dust. Emission nebulae - glowing energized clouds of gas, and reflection nebulae - dust clouds shining by reflected starlight, abound at this photogenic cosmic location a mere 1,500 light-years or so away. This telescopic image reveals an intriguing nebulosity which seems to consist of dust clouds illuminated not by starlight but by the light of the Orion Nebula itself. In non-telescopic views, the bright group of stars near the top appear as the northernmost star in Orion's sword. They are seen here illuminating the nearby dust clouds. Yet the yellowish streamers of dust across the middle reflect the light of the Orion Nebula, which lies just off the bottom edge of the photo.",
    "hdurl": "https://apod.nasa.gov/apod/image/9901/uks025b_malin.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Reflections Of Orion",
    "url": "https://apod.nasa.gov/apod/image/9901/uks025b_malin.jpg"
  })
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(function (response) {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error)

      })
      .finally(() => {

      })
  }, [])


  return (
    <div className="App">
      <Imaginer viewData={data} />

    </div>
  );
}

export default App;
