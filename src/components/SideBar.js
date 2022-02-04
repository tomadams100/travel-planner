import React, { useState } from 'react';
import DayListItem from './DayListItem';

export default function SideBar({selectedDay, setSelectedDay, tripLength, setTripLength}) {
    

    function handleTripLengthSubmit(e) {
        e.preventDefault()
        setTripLength(e.target[0].value)
    }

    const all_days = []
    for (let i = 0; i < tripLength; i++) {
        all_days.push(<DayListItem selectedDay={selectedDay} setSelectedDay={setSelectedDay} i={i} />)
    }

  return(
      <div className='sidebar'>
      <h1 className='trip-title'>Your trip</h1>
      <form onSubmit={handleTripLengthSubmit}>
        <input type='number' />
        <button type='submit'>Set</button>
      </form>
      <p>Trip length {tripLength}</p>
      <ul className='trip-days'>
        {all_days}
      </ul>
      </div>

  );
}