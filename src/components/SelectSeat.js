import React from "react";
import '../styles/SelectSeat.css';
import { useState } from "react";
const SelectSeat = ()=>{

    const [selectedSeats,setSelectedSeats]=useState([]);

    const handleSeatSelect=(seatNumber)=>{
        if(selectedSeats.includes(seatNumber))
        {
            setSelectedSeats(selectedSeats.filter((seat)=> seat!==seatNumber));
        }
        else
        {
            setSelectedSeats([...selectedSeats,seatNumber]);
        }
    };
    return(
        <div className="selectSeatContainer">
            <div className={`seat ${selectedSeats.includes(1) ? 'selected' : ''}`} onClick={()=>handleSeatSelect(1)}>Seat 1</div>
            <div className={`seat ${selectedSeats.includes(2) ? 'selected' : ''}`} onClick={()=>handleSeatSelect(2)}>Seat 2</div>
        </div>
    );
};

export default SelectSeat;