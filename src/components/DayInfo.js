import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export default function DayInfo({i}) {
    const [formData, setFormData] = useState({
        location: '',
        language: '',
        accomodation: 'Hotel'
    })
    const [dayData, setDayData] = useLocalStorage(`day-${i +1}`,{})

    function handleInput(e) {
        console.log("e: ",e)
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log("formData: ", formData)
    }

    function handleLocationSubmit(e) {
        e.preventDefault()
        setDayData(formData)
    }
  return(
      <div className='day-info'>
        <h3>Day {`${i + 1}`}</h3>
        
        <form onSubmit={handleLocationSubmit} className="day-info-form">
          <label for='location'>Location:</label>
          <input type='text' name='location' onChange={handleInput} />
          <label for='language'>Language:</label>
          <input type='text' name='language' onChange={handleInput} />
          <label for='accomodation'>Accomodation:</label>
          <select name='accomodation' onChange={handleInput}>
            <option value='Hotel'>Hotel</option>
            <option value='AirBnB'>AirBnB</option>
            <option value='Hostel'>Hostel</option>
          </select>
          <button type='submit'>Set</button>
        </form>

        <p>Location: {dayData.location}</p>
        <p>Language: {dayData.language}</p>
        <p>Accomodation: {dayData.accomodation}</p>
      </div>
  );
}
