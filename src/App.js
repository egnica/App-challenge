import Form from './Form/Form';
import './App.css';
import { useState } from 'react';
function App() {

  const [userInput, setUserInput] = useState({ user:[] });


  const userHandler = (value) => {
    let userData = userInput['user'];
    userData.push(value);
    setUserInput({ user:userData });
    console.log(userInput);
  }
  const tagClick = (event) => {
    
    event.target.hidden = true;
  }


  return (
    <div style={{display: 'grid', placeContent: 'center'}}  className="App">

<Form userTansfer = {userHandler} />
{
  userInput.user.map(
    (item, index) =>
    <div className = 'mouse' onClick = {tagClick} key={index} style={{textAlign:'left', maxHeight:'30px'}}>
      <p>{item.name} ({item.age} years old)</p>
    </div>
  )
}

    </div>
  );
}

export default App;
