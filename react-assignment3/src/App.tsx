import React, { useState } from 'react';
import Dashboard from './Components/dashboard/Dashboard';
import Footer from './Components/footer/Footer';
import Grid from '@material-ui/core/Grid';
import Login from './Components/login/Login';
import AllNews from './Components/news/AllNews';
import Header from './Components/header/Header';
import AllNewsSource from './Components/newssource/AllNewsSource';
import UserProfileData from './Components/profile/UserProfileData';

import {
  BrowserRouter as Router,
  Redirect,
  Route
} from 'react-router-dom'

function App() {
  const [token,setToken] = useState('');
  const [page,setPage] = useState('Dashboard');
  const [userName,setUserName] = useState('');

  const updateToken =(token:string) => {
    localStorage.setItem('token',token);
    setToken(token)
  }
  const updatePage =(page:string) => {
    setPage(page)
  }
const updateUserName =(name:string) => {
  localStorage.setItem('UserName',name);
  setUserName(name)
}
const handleLogout =() => {
  localStorage.clear();
  updateToken("");
}

  return (
    <div>
      <Grid container direction = "column">
      <Header token={token} handleLogout={handleLogout} updatePage={updatePage} userName={localStorage.getItem("UserName")}></Header>
        <Router>
          <Route exact path = '/' 
            component = {() =>(token)?<Redirect to = '/dashboard'></Redirect>
                                    : <Login updateToken = {updateToken} updateUserName={updateUserName}/>
                        } />
          <Route exact path = '/dashboard' 
            component = {
                () =>(page=='AllNews')?<Redirect to = '/news'></Redirect>
                    :(page=='AllNewsSource')?<Redirect to = '/newssource'></Redirect>
                    :(page=='UserProfile')?<Redirect to = '/userprofile'></Redirect>
                    : (token)?<Dashboard/>:<Redirect to = '/'/> 
                        } />
        
          <Route exact path = '/news' 
            component = {
              () => (page=='Dashboard')?<Redirect to = '/dashboard'></Redirect>
              :(page=='AllNewsSource')?<Redirect to = '/newssource'></Redirect>
              :(page=='UserProfile')?<Redirect to = '/userprofile'></Redirect>
              :(token)?<AllNews updatePageValue={updatePage} />:<Redirect to = '/'/>
                        } />

          <Route exact path = '/newssource' 
            component = {
              () => (page=='AllNews')?<Redirect to = '/news'></Redirect>
              :(page=='Dashboard')?<Redirect to = '/dashboard'></Redirect>
              :(page=='UserProfile')?<Redirect to = '/userprofile'></Redirect>
              :(token)?<AllNewsSource />:<Redirect to = '/'/>
                        } />

<Route exact path = '/userprofile' 
            component = {
              () => (page=='AllNews')?<Redirect to = '/news'></Redirect>
              :(page=='Dashboard')?<Redirect to = '/dashboard'></Redirect>
              :(page=='AllNewsSource')?<Redirect to = '/newssource'></Redirect>
              :(token)?<UserProfileData />:<Redirect to = '/'/>
                        } />

        </Router>
        <Footer></Footer>
      </Grid>
    </div>
  );
}

export default App;
