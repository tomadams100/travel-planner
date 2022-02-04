import React, { useState } from 'react';
import DayInfo from './components/DayInfo';
import SideBar from "./components/SideBar";
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [selectedDay, setSelectedDay] = useState(0)
  const [tripLength, setTripLength] = useLocalStorage('trip-length',0)

  const all_days_info = []
  for (let i = 0; i < tripLength; i++) {
    all_days_info.push(<DayInfo i={i} />)
  }

  return (
    <div className='app'>
      <SideBar selectedDay={selectedDay} setSelectedDay={setSelectedDay} tripLength={tripLength} setTripLength={setTripLength} />
      {all_days_info.map((day,i) => {
        if (i === selectedDay) return day
        else return
      })}
    </div>
  );
}

export default App;
