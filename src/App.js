import React, {useState, useCallback} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import AppLayout from './AppLayout/AppLayout';
import LoginPage from './LoginPage/LoginPage';
import { AuthContext } from './Context/auth-context';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  const [userType, setUserType] = useState('');

  const login = useCallback(() => {
    setIsLoggedIn(true);
    setUserType('maker');
   
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserType();

  }, []);

  let routes;

if(!isLoggedIn){
  routes=(
    <Switch>
      <Route path="/" exact><LoginPage /></Route>
      <Redirect to="/" />
    </Switch>
  
  );
}
else{
  routes=(<Switch>
  <Route path="/" exact>
  <AppLayout />
  </Route>

  {/*Path for pension creation starts */}

  <Route path="/models/train" exact>
  <AppLayout  
  tabs={[{label: 'Train a model', url: '/models/train', currentPath: true}, {label: 'Detect Objects', url: '/models/test', currentPath: false} ]}/>
  </Route>

  <Route path="/models/test"  >
  <AppLayout  
  tabs={[{label: 'Train a model', url: '/models/train', currentPath: false}, {label: 'Detect Objects', url: '/models/test', currentPath: true}]}/>
  </Route>

  <Redirect to="/" />
 </Switch> )
}

  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout, userType: userType}}>
       <Router>
     {routes}
    </Router>
    
    </AuthContext.Provider>
   
  );
}

export default App;
