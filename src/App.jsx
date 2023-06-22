import { useEffect, useState } from 'react'
import './App.css'
import { useToggle } from './hooks/useToggle';
import { useDirection } from './hooks/useDirection';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {

  const { text, handleToggle } = useToggle();
  const { direction, handleDirectionCheck } = useDirection();
  const [user, setUser] = useState({
    userId: '',
    userName: ''
  });
  const { userData, handleLogIn, handleLogOut } = useLocalStorage(user);

  // input handle (onChange)
  const handleChange = (event) => {

    setUser(prev => ({ ...prev, [event.target.name]: event.target.value }));
  }

//input clear 
  const handleClear = () => {
    setUser({ userId: '', userName: '' });
  }

  // console.log('user:', user);
  // console.log('user-data===:', userData);


  return (
    <div className='app-container'>

      {/* {text === false && <h1> User Log-in</h1>} */}
      <div className="user-name">
        {(userData !== null) ? <h1>Welcome <span> {userData.userName} </span> </h1> : <h1> User Log-in</h1>}
      </div>

      <button className='toggle-btn' onClick={handleToggle} >{text ? 'ON' : 'OFF'}  </button>

      {text && <div className="local-storage-container">
        <div className='input-div'>
          <input type="text" placeholder='user id' name='userId' value={user.userId} onChange={handleChange} />
          <input type="text" placeholder='user name' name='userName' value={user.userName} onChange={handleChange} />
        </div>

        <div className='button-div'>
          <button className='red' onClick={() => { handleLogOut(); handleClear(); }} > Log-out </button>
          <button className='green' onClick={() => { handleLogIn(); handleClear(); }} > Log-in </button>
        </div>
      </div>
      }

      <div className="direction-container" >
        <button onClick={handleDirectionCheck}> check</button>
        <p> html direction : <span>{direction}</span> </p>
      </div>

    </div>
  )
}

export default App
