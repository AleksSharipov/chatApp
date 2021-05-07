import { useEffect, useRef } from 'react';
import { MessageListItem } from './MessageListItem';
import './style.css'

export const MessageList = ({ messages, removeMessage }) => {

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [messages])

  return (
    <>

      {messages.map((msg) => (
        <MessageListItem
          key={msg.messageId}
          msg={msg}
          removeMessage={removeMessage}
        />

      ))}
      <span className='asd' ref={messagesEndRef}></span>
    </>
  )
}