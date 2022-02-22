import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Card = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("datas-kasa.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data)
        setApartments(data);
      })
      .catch((error) => {
        console.log("erreur dans la recup des datas");
      });
    return;
  }, []);

  return (
    <div className="main-home">
    <div className="container-apartment">
      {apartments.map((apartment, index) => (
        <Link key={index} to={`/rental/${apartment.id}`}>
          <div className="apart-card">
            <div
              className="apart-card"
              style={{
                backgroundImage: `url(${apartment.cover})`,
              }}
            >
              <h3 className="apart-card-title">{apartment.title}</h3>
            </div>
          </div>
        </Link>
      ))}
  </div>
    </div>
    )
};

export default Card;