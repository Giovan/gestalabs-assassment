import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from '../components/Login/Login';
import Home from '../components/Home/Home';

class MasterBase extends React.Component {
    render() {
      // const user = this.props.userMaster;
      const user = this.props.user;
      if (user.isLoggedIn) {
          return (
            <Router>
              <div>
                <Redirect to='/home' />
                <Route path='/home' component={Home} />
              </div>
            </Router>
          );
      } else {
        return (
          <Router>
            <div>
                <Redirect to='/' />
                <Route path='/' component={Login}/>
            </div>
          </Router>
        );
      }
    }
}
export default MasterBase;