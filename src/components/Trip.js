import React from 'react';
import { Link } from "react-router-dom";
import { useTripData } from '../contexts/TripProvider';

export default function Trip() {
  const { savedData, setSavedData } = useTripData()
  const trip_length_num = Number(savedData[0].trip_length)
  
  for (let i = 0; i < trip_length_num; i++) {
    setSavedData(prevData => {
      return [...prevData, {"hello":"world"}]
    })
    console.log("savedData: ", savedData)
  }

  return (
    <>
    <h1>Trip</h1>
    <p>Your trip will be {savedData[0].trip_length} days long.</p>
    <p>The creator of the trip was {savedData[0].trip_creator}.</p>
    <Link to="/">View Home Page</Link>
    </>
  );
}
