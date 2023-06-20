import { useState } from 'react'
import './App.css'
import { useToggle } from './hooks/useToggle';
import { useDirection } from './hooks/useDirection';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {

  const { text, handleToggle } = useToggle();
  const { direction, handleDirectionCheck } = useDirection();
  const [userName,setUserName]=useState('');
  const {userList, handleSubmit} = useLocalStorage(userName);


  const handleChange=(event)=>{
 setUserName(event.target.value);

  }
  const handleRetrive =()=>{
    console.log(JSON.parse(localStorage.getItem('user-name')));
  }
  console.log('rendering....');

  return (
    <div className='app-container'>
      <h1>Custom hooks</h1>

      <div className='toggle-container'>
        <p>click to toggle <i className="fa-solid fa-arrow-right"> </i> </p>
        <button className='toggle-btn' onClick={handleToggle} >{text ? 'ON' : 'OFF'}  </button>
      </div>

      <div className="direction-container" >
        <button onClick={handleDirectionCheck}> check</button>
        <p> html direction : <span>{direction }</span> </p>
      </div>

      <div className="local-storage-container">
        <input type="text" placeholder='user id'   onChange={handleChange} />
        <input type="text" placeholder='user name'   onChange={handleChange} />
        <button onClick={handleSubmit} > submit </button>
        <button onClick={handleRetrive} > retrive </button>
        <p></p>
        {/* <button onClick={hanldeDownload} > download </button> */}

      </div>

    </div>
  )
}

export default App
