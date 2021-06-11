import { Route, Switch, NavLink, Link } from 'react-router-dom'
import AllMeetups from './pages/AllMeetups'

import Faves from './pages/Favorites'
import NewMeetups from './pages/NewMeetups'
import MainNav from './components/Layout/MainNav.jsx'
import { Nav, Button}  from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/Layout/Layout'

function App() {
  return (

    <Layout>

   
      
        {/* <Nav> <MainNav />  </Nav> */}
       
      
      <Switch>
      
      <Route path="/" exact={true}> <AllMeetups /></Route>
      <Route path="/newMeets"> <NewMeetups /></Route>
      <Route path="/Faves"> <Faves /></Route>

      </Switch>
      
      
      

   
    </Layout>
  );
}

export default App;
