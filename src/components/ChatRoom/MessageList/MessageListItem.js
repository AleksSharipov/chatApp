// import TimeAgo from 'react-timeago';
import './style.css';

export const MessageListItem = ({ msg, removeMessage }) => {

  const handleRemoveMessage = (id) => {
    removeMessage(id)
  }

  const { messageId, messageText, senderName, createdAt, currentUser } = msg;

  // function realTime() {
  //   let realTime;
  //   let date = new Date(); // (*)
  //   let hours = date.getHours();
  //   if (hours < 10) hours = '0' + hours;

  //   let minutes = date.getMinutes();
  //   if (minutes < 10) minutes = '0' + minutes;

  //   let seconds = date.getSeconds();
  //   if (seconds < 10) seconds = '0' + seconds;

  //   realTime = `${hours}:${minutes}:${seconds} `
  //   return realTime
  // }

  return (
    <div className={`message__items ${currentUser ? `message__right` : ``}`}>
      {currentUser && <input value='X' className="message__trash" type="button" onClick={() => { handleRemoveMessage(messageId) }}></input>}
      <ul className={`message__item `}>
        <li className="message__date">Отправлено: {createdAt}</li>
        <li className="message__user">{senderName}</li>
        <li className="message__text">{messageText}</li>



      </ul>


    </div >
  )

}