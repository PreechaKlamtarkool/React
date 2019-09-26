import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Boy', age: 27},
      { name: 'Stan', age: 17}
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maxim';
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Boy', age: 27},
        { name: 'Stan', age: 18}
      ]
    })
  }

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 27},
        { name: 'Stan', age: 22}
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={() => switchNameHandler('Maximilian')}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}/>
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, 'Max!')}
        changed={nameChangeHandler} >My Hobbies: Racing</Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}/>    
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?')); 
}

export default app;
