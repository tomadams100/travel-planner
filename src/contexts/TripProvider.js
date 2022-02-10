import React, { useContext, useRef, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';


const TripContext = React.createContext()

export function useTripData() {
    return useContext(TripContext)
}

export function TripProvider({children}) {
    const [savedData, setSavedData] = useLocalStorage('trip','')

    function createTrip(data) {
        data.preventDefault()
        
        const trip_length = data.target[0].value
        const trip_creator = data.target[1].value
        
        setSavedData(prevData => {
          return [...prevData, {trip_length, trip_creator}]
        })
    }

  return (
    <TripContext.Provider value={{ createTrip, savedData }}>
        {children}
    </TripContext.Provider>
  );
}
