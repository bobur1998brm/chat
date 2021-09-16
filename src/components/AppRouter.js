import React from 'react'
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom'
import Chat from './chat/Chat';
import Login from './login/Login';
  import {useAuthState} from 'react-firebase-hooks/auth'
  import {auth} from '../firebase'

function AppRouter() {
    // const user = false;
    const [user] =  useAuthState(auth);
    return user ? (
        <Switch>
            <Route exact path="/chat" component={Chat} />
            <Redirect to='chat'/>
        </Switch>
    ):(
        <Switch>
            <Route exact path="/login" component={Login} />
            <Redirect to='login'/>
        </Switch>
    )
}

export default AppRouter


//   import React from 'react'
//   import {BrowserRouter as  Route, Switch,Redirect} from 'react-router-dom'
//   import Chat from './chat/Chat';
//   import Login from './login/Login';
//   import {useAuthState} from 'react-firebase-hooks/auth'
//   import {auth} from '../firebase'
  
//   function AppRouter() {
  
//       // const [user] =  useAuthState(auth);
//       const user = true
//       return user ? (
//           <Switch>
//               <Route exact path="/chat" component={Chat} />
//               <Redirect to='chat'/>
//           </Switch>
//       ):(
//           <Switch>
//               <Route exact path="/login" component={Login} />
//               <Redirect to='login'/>
//           </Switch>
//       )
//   }
  
//   export default AppRouter