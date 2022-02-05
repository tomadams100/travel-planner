import React, { useContext, useRef, useState } from 'react';


const TripContext = React.createContext()

export function useTripData() {
    return useContext(TripContext)
}

export function TripProvider({children}) {
    let tripData = useRef()
    
    function createTrip(data) {
        data.preventDefault()
        tripData.current = data.target[0].value        
    }

  return (
    <TripContext.Provider value={{tripData, createTrip}}>
        {children}
    </TripContext.Provider>
  );
}
