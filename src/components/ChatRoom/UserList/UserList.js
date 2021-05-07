import './style.css'

export const UserList = ({ users }) => {

  const usersArr = Object.entries(users);
  const activeUsers = Object.values(users)
    .filter((u) => u.online).length


  return (
    <div>
      <div></div>
      <details>
        <summary>Active users: {activeUsers}</summary>
        <ul>
          {usersArr.map(([userId, obj]) => (
            <li key={userId}>
              {obj.username}
              <span className={obj.online ? `online` : 'offline'}>{obj.online ? `- Online` : '- Offline'}</span>
            </li>
          ))}
        </ul>

      </details>


    </div>
  )


}