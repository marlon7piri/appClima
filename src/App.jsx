import { useEffect, useState } from "react";

import "./App.css";

import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [pais, setPais] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY

  const hanlderClick = () => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey} &q=${city}&aqi=no`
      )
      .then((response) => {
        setPais(response.data);
        console.log(pais);
        
      });
  };



 
 

  return (
    <div className="container_principal w-screen h-screen flex justify-center items-center relative bg-[url(wallpaper.svg)]">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="lg:w-[600px] mb-6 flex gap-4  sm:w-[100px] p-4">
          <label className="block mb-2 text-sm font-black text-gray-900 ">
            Buscar Region:
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            onClick={hanlderClick}
          >
            Green
          </button>
        </div>

        <div className="container_card  ">
          <div className="card p-4 shadow-2xl shadow-black">
            <img
              className="object-cover w-[140px] h-[160px] m-auto"
              src={
                pais ? pais.current.condition.icon : "src/assets/eclipse.png"
              }
              alt="imagen de estado del tiempo "
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 ">
                Pais:{" "}
                <span className="font-medium text-4xl">
                  {pais ? pais.location.country : ""}
                </span>
              </h5>
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900  sm:text-2xl">
                Region:{" "}
                <span className="font-medium">
                  {pais ? pais.location.region : ""}
                </span>
              </p>
              <p className="mb-3 font-extrabold text-gray-900  lg:text-3xl sm:text-2xl">
                Temperatura:{" "}
                <span className="font-medium">
                  {pais ? pais.current.temp_c : ""} °C
                </span>
              </p>
              <p className="mb-3 font-extrabold text-gray-900  lg:text-3xl sm:text-2xl">
                Resumen:{" "}
                <span className="font-medium">
                  {pais ? pais.current.condition.text : ""}
                </span>{" "}
              </p>
              <p className="mb-3 font-extrabold text-gray-900  lg:text-3xl sm:text-2xl">
                Humedad:{" "}
                <span className="font-medium">
                  {pais ? pais.current.humidity : ""}
                </span>{" "}
              </p>
              <p className="mb-3 font-extrabold text-gray-900  lg:text-3xl sm:text-2xl">
                Velocidad del viento:{" "}
                <span className="font-medium">
                  {pais ? pais.current.wind_kph : ""} km/ph
                </span>{" "}
              </p>
              <div className="flex gap-4 justify-between">
                <p className="mb-3 font-extrabold text-gray-900  lg:text-3xl sm:text-2xl">
                  Hora:{" "}
                  <span className="font-medium">
                    {pais ? pais.location.localtime.substring(10, 16) : ""}
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
