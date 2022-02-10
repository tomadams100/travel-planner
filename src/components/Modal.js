import React from 'react';
import { useTripData } from '../contexts/TripProvider';
import {useNavigate} from 'react-router-dom'

export default function Modal(props) {
  const { createTrip } = useTripData()
  let navigate = useNavigate()
  
  if (!props.showModal) return null
  
  return (
    <>
    <div className='modal'>
        <div className='modal-content'>
            <div className='modal-body'>
            <form onSubmit={(data) => {createTrip(data); navigate('/trip')}}>
                <label htmlFor='tripLength'>Trip Length</label>
                <input type='number' />
                <label htmlFor='tripCreator'>Trip Creator</label>
                <input type='text' />
                <button type='submit'>Create Trip!</button>
            </form>
            </div>
            <div className='modal-footer'>
                <button className='button' onClick={props.onClose}>Cancel</button>
            </div>
        </div>
    </div>
    </>
  );
}
