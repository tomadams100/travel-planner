import React, { useState } from 'react';
import DayListItem from './DayListItem';

export default function SideBar({selectedDay, setSelectedDay, tripLength, setTripLength}) {
  const [numberInputed, setNumberInputed] = useState(tripLength)

  function handleChange(e) {
    e.preventDefault()
    setNumberInputed(e.target.value)
  }

    function handleTripLengthSubmit(e) {
        e.preventDefault()
        setTripLength(e.target[0].value)
    }

    function clearLocalStorage() {
      for (let i = 1; i <= tripLength; i++) {
        localStorage.removeItem(`travel-planner-day-${i}`)
        localStorage.removeItem(`travel-planner-trip-length`)
      }
    }

    const all_days = []
    for (let i = 0; i < tripLength; i++) {
        all_days.push(<DayListItem selectedDay={selectedDay} setSelectedDay={setSelectedDay} i={i} />)
    }

  return(
      <div className='sidebar'>
      <h1 className='trip-title'>Your trip</h1>
      <form onSubmit={handleTripLengthSubmit}>
        <input type='number' value={numberInputed} onChange={handleChange}/>
        <button type='submit'>Set</button>
      </form>
      <p>Trip length {tripLength}</p>
      <ul className='trip-days'>
        {all_days}
      </ul>
      <button onClick={clearLocalStorage}>Clear Trip</button>
      </div>
  );
}