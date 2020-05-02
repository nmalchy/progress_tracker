import React from 'react';
import './App.css';


const Button = (props) => {
   return (
   <React.Fragment>
      <button type={props.type}>Submit</button>
   </React.Fragment>
   );
}

const Input = () => {
   return (
      <React.Fragment>
      <h1>Fitness Progress Tracker</h1>
      <form method='post' action='#'>
         <input type='text' placeHolder="Enter Weight" />
         <input type='text' placeHolder="Enter Body fat %" />
         <Button type="submit"/>
      </form>
      </React.Fragment>
   )
}

function App() {
   return (
      <React.Fragment>
      <Input />
      </React.Fragment>
      );
   }

export default App;
