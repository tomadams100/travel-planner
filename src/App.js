import React, { useState } from 'react';
import DayInfo from './components/DayInfo';
import SideBar from "./components/SideBar";
import TripSummary from './components/TripSummary';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [selectedDay, setSelectedDay] = useState(0)
  const [tripLength, setTripLength] = useLocalStorage('trip-length',0)

  const all_days_info = []
  for (let i = 0; i < tripLength; i++) {
    all_days_info.push(<DayInfo i={i} />)
  }

  var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

  while ( i-- ) {
      values.push( localStorage.getItem(keys[i]) );
  }

  return (
    <div className='app'>
      <SideBar selectedDay={selectedDay} setSelectedDay={setSelectedDay} tripLength={tripLength} setTripLength={setTripLength} />
      {selectedDay === - 1 ? <TripSummary tripData={values} /> : '' }
      {all_days_info.map((day,i) => {
        if (i === selectedDay) return day
        else return
      })}
    </div>
  );
}

export default App;
