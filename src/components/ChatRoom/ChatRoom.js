import { useParams } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useChat } from '../../hooks/useChat';

import { MessageForm } from './MessageForm/MessageForm';
import { MessageList } from './MessageList/MessageList';
import { UserList } from './UserList/UserList';
import './style.css';

export default function ChatRoom() {
  const { roomId } = useParams();
  const [username] = useLocalStorage('username');
  const { users, messages, sendMessage, removeMessage } = useChat(roomId);

  return (
    <div className="chatroom">
      <h2>Room: {roomId === 'free' ? 'Free' : ''}</h2>
      <UserList users={users} />
      <MessageList messages={messages} removeMessage={removeMessage} />
      <MessageForm username={username} sendMessage={sendMessage} />
    </div>
  )
}