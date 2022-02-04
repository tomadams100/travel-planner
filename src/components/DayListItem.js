import React from 'react';

export default function DayListItem({selectedDay, setSelectedDay, i}) {
  return <li id={`${i}`} className={`trip-days-individual ${selectedDay == i ? `active` : `` }`} onClick={() => setSelectedDay(i)}>Day {`${i + 1}`}</li>
}
