import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from './Modal';

export default function Home() {
const [showModal, setShowModal] = useState(false)

return (
    <>
    <h1>Trip Planner</h1>
    
    <p>Planning a trip? Let us help!</p>
    
    <button onClick={() => setShowModal(true)}>Show Modal</button>
    <Modal showModal={showModal} onClose={() => setShowModal(false)} />
    <br />
    <Link to='/trip'>Trip</Link>
    </>
    );
}
