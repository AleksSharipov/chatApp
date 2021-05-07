import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import ChatRoom from './components/ChatRoom/ChatRoom';

function App() {

  const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/:roomId', name: 'ChatRoom', Component: ChatRoom }
  ]

  return (
    <div className='main'>
      <Router>
        <a className='main__logo' href='/'>Chat app</a>
        <div className='main__form'>
          <Switch>
            {
              routes.map(({ path, Component }) => {
                return (<Route key={path} path={path} exact>
                  <Component />
                </Route>)
              })
            }
          </Switch>
        </div>
      </Router>
    </div>


  );
}

export default App;
