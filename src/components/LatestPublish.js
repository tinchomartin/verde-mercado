import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LatestPublish.css";
import "./PagePlant.js";

const LatestPublish = () => {
  const [plants, setPlants] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://trefle.io/api/v1/plants?token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMTQyNywib3JpZ2luIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiaXAiOm51bGwsImV4cGlyZSI6IjIwMjEtMDMtMTIgMTg6MTM6MDAgKzAwMDAiLCJleHAiOjE2MTU1NzI3ODB9.PzQHfkdz2GCHc2DLUA070yuyXwt3iMwuHkyBd0h-eyg"
      )
      .then((res) => setPlants(res.data));
  }, []);

  return (
    <>
      <div>
        <p>test3</p>

        {plants &&
          plants.map((plant, i) => {
            <div className="card-plant">
              <p>hola 2</p>
              <h1>hola {plant.data[i].common_name}</h1>
            </div>;
          })}
      </div>
    </>
  );
};

export default LatestPublish;
