import { useState } from 'react';
import './style.css'

export const MessageForm = ({ username, sendMessage }) => {

  const [text, setText] = useState('');

  const handleChangeText = (e) => {
    setText(e.target.value);
  }

  const handleSendMessage = (e) => {
    e.preventDefault();

    const trimmed = text.trim();
    if (trimmed) {
      sendMessage({ messageText: text, senderName: username })
      setText('')
    }
  }

  return (
    <div>
      <form className="form__message" onSubmit={handleSendMessage}>
        <input className="chatform__input" value={text} onChange={handleChangeText} type="text" placeholder="Messages..."></input>
        <input className="chatform__button" type="submit"></input>
      </form>
    </div>
  )

}