// import ChatTest from './components/ChatTest'
import './App.css';
// import Show from './components/Show';
// import Login from './components/login/Login';
// import Chat from './components/chat/Chat';
import {BrowserRouter as Router} from 'react-router-dom'
import AppRouter from './components/AppRouter';
  import {useAuthState} from 'react-firebase-hooks/auth'
  import {auth} from './firebase'
import Loading from './components/login/Loading';

function App() {
  const [user, loading] =  useAuthState(auth);
  if(loading){
    return <Loading/>
  }
  return (
    <div>
      <Router>
        <AppRouter/>
      </Router>
      {/* <ChatTest/> */}
      {/* <Show/> */}
    </div>
  
  );
}

export default App;
