import './App.css';
import { useState } from 'react';

function Box() {
  const [addfriend, setAddfriend] = useState("Stranger");
  const [remove, setRemove] = useState("");
  
  return (
    <div className="box1">
      <img src="https://media.istockphoto.com/id/1282162847/photo/close-up-portrait-of-beautifully-looking-young-blonde-haired-woman-dressed-in-a-delicate.jpg?s=612x612&w=0&k=20&c=cSvsg2MzdIhFGM-JXEB2iI6yV0GsRyBszfSbvqjT8HA=" alt="Alima Image" />
      <h1>Riya Gautom</h1>
      <h5 style={{ color: addfriend === "Friend" ? "green" : "red" }}>{addfriend}</h5>
      <button className='remove' onClick={()=>setAddfriend("Stranger")}>Remove</button>
      <button className='add' onClick={()=>setAddfriend("Friend")}>Add Friend</button>
    </div>
  );
}

export default Box;
