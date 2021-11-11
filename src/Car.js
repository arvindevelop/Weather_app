import React,{useState} from 'react';
const Car = () => {
    const [car, setCar] = useState({
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red"
    });
  
    const updateColor = () => {
      setCar(previousState => {
        return { ...previousState, year: "2021" }
      });
    }
  
    return (
      <>
        <h1>My {car.brand}</h1>
        <p>
          It is a {car.color} {car.model} from {car.year}.
        </p>
        <button
          type="button"
          onClick={updateColor}
        >2021</button>
      </>
    )
  }

  export default Car;