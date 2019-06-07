import React from 'react';
import './styles/styles.sass';
import MasterBase from './Base/MasterBase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        isLoggedIn: false,
        token: '',
        isTokenLoaded: false
      }
    }
  }
  componentDidMount() {
    this.sessionIntervalCheck = setInterval(
      () => this.checkUserSession(),
      1000
    );
  }
  checkUserSession() {
    let localStorageToken = '';
    if (localStorage.getItem('token')) {
      localStorageToken = localStorage.getItem('token');
      this.setState({
        user: {
          token: localStorageToken,
          isLoggedIn: true,
          isTokenLoaded: true
        }
      });
      /* console.log('this.state.user.token: ' + this.state.user.token);
      console.log('this.state.user.isLoggedIn: ' + this.state.user.isLoggedIn);
      console.log('this.state.user.isTokenLoaded: ' + this.state.user.isTokenLoaded); */
    } else {
      this.setState({
        user: {
          token: '',
          isLoggedIn: false,
          isTokenLoaded: true
        }
      });
    }
  }
  componentWillUnmount() {
     clearInterval(this.sessionIntervalCheck);
  }
  render() {
    if (this.state.user.isTokenLoaded) {
      return (<MasterBase user={this.state.user} />);
    } else {
      return (
        <div className='container'>
          <br />
          <div className='center-align'>
            <h2>Loading Server Data...</h2>
          </div>
        </div>
      );
    }
  }
}

export default App;
