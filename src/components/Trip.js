import React from 'react';
import { Link } from "react-router-dom";
import { useTripData } from '../contexts/TripProvider';

export default function Trip() {
  const {tripData} = useTripData()
  console.log("tripData: ", tripData)
  return (
    <>
    <h1>Trip</h1>
    <p>Your trip will be {tripData.current} days long.</p>
    <Link to="/">View Home Page</Link>
    </>
  );
}
