import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export default function DayInfo({i}) {
  const [dayData, setDayData] = useLocalStorage(`day-${i +1}`,{})
  const [formData, setFormData] = useState({
      location: dayData.location,
      language: dayData.language,
      accomodation: dayData.accomodation || 'Hotel'
  })

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
        <div className='day-info-form-container'>
          <form onSubmit={handleLocationSubmit} className='day-info-form-content'>
            <label htmlFor='location'>Location:</label>
            <input type='text' name='location' value={formData.location} onChange={handleInput} />
            <label htmlFor='language'>Language:</label>
            <input type='text' name='language' value={formData.language} onChange={handleInput} />
            <label htmlFor='accomodation'>Accomodation:</label>
            <select name='accomodation' onChange={handleInput}>
              {dayData.accomodation === 'Hotel' ? <option value='Hotel' selected>Hotel</option> : <option value='Hotel'>Hotel</option>}
              {dayData.accomodation === 'AirBnB' ? <option value='AirBnB' selected>AirBnB</option> : <option value='AirBnB'>AirBnB</option>}
              {dayData.accomodation === 'Hostel' ? <option value='Hostel' selected>Hostel</option> : <option value='Hostel'>Hostel</option>}
            </select>
            <button type='submit'>Set</button>
          </form>
        </div>

        <p>Location: {dayData.location}</p>
        <p>Language: {dayData.language}</p>
        <p>Accomodation: {dayData.accomodation}</p>
      </div>
  );
}
