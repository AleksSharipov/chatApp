import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import './style.css'

export function Home() {

  const [username, setUsername] = useLocalStorage('username', 'John');
  const [roomId, setRoomId] = useState('free');
  const linkRef = useRef(null);
  console.log(username)
  const handleChangeName = (e) => {
    setUsername(e.target.value);
  }

  const handleChangeRoom = (e) => {
    setRoomId(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    linkRef.current.click();
  }


  return (
    <>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <input className="form__input" placeholder="Name" value={username} onChange={handleChangeName}></input>
        <select className="form__input" value={roomId} onChange={handleChangeRoom}>
          <option value="free">Free</option>
        </select>
        <Link to={`/${roomId}`} ref={linkRef} className="form__btn">
          <input className="form__submit" type="submit" value="Войти в чат" />
        </Link>

      </form>
    </>

  )


}