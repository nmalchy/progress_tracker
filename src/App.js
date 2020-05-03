import React from 'react';
import './App.css';


const Button = (props) => {
   return (
   <>
      <button type={props.type}>Submit</button>
   </>
   );
}

const Input = () => {
   return (
      <>
      <h1>Fitness Progress Tracker</h1>
      <form method='post' action='#'>
         <input type='text' placeHolder="Enter Weight" />
         <input type='text' placeHolder="Enter Body fat %" />
         <Button type="submit"/>
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
