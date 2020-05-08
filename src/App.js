import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Graph from './Graphs';


const Button = (props) => {
   return (
   <>
      <button type={props.type} onClick={props.onClick}>{props.text}</button>
   </>
   );
}

function Input(props) {

   const [weight, setWeight] = useState("");
   const [bodyFat, setBf] = useState("");
   const [success, isSuccessful] = useState(false);
   const [toggle, setToggle] = useState(false);

   const handleSubmit = (e) => {
      const formData = new FormData();
      formData.append('weight', weight);
      formData.append('bf', bodyFat);
      e.preventDefault();
      axios.post('http://localhost:9090/pt_server/index.php', formData)
       .then(function (response) {
         isSuccessful(true);
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
       });
   }

   const handleToggle = () => {
      if (toggle === false) {
         setToggle(true);
      } else {
         setToggle(false);
      }
   }

   return (
      <>
      <h1>Fitness Progress Tracker</h1>
         <form onSubmit={handleSubmit} method='post'>
            <input value={weight} type='text' placeholder="Enter Weight" onChange={e => setWeight(e.target.value)} />
            <input value={bodyFat} type='text' placeholder="Enter Body Fat %" onChange={e => setBf(e.target.value)}/>
            <Button type="submit" text='Submit'/>
            <Button type="button" text='Show Personal Data' onClick={handleToggle}/>
            {success === true && <h5>Your data has been logged!</h5>}
            {toggle === true && <Graph />}
         </form>
      </>
   )
}

function App() {
   return (
      <>
      <Input />
      </>
      );
   }

export default App;
