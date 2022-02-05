import React from 'react';

export default function TripSummary({tripData}) {
    tripData.pop()
    let data = []
    tripData.forEach(element => {
        data.push(JSON.parse(element))
    });
    console.log("data: ", data)
    
  return (
      <>
        <h1>This is a trip summary</h1>
        {data.map(day => (
            day.accomodation
        ))}
      </>
      
  );
}
