import React from "react";
import { Input } from 'reactbulma';

import "./Login.sass";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false
    };
  }

  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  isLoading = () => {
    if(!this.state.isLoading) {
      this.setState({
        isLoading: true
      });
    } else {
      this.setState({
        isLoading: false
      });
    }
  }

  login = (event) => {
    event.preventDefault();
    console.log("login was triggered.");
    console.log(this.state.email + this.state.password);
    if ((this.state.email === '' && this.state.email.length < 6) || (this.state.password === '' && this.state.email.length < 6)) {
      //Show error notification
    } else {
      const stateData = this.state;
      const email = this.state.email;
      const password = this.state.password;
      console.log('stateData: ' + stateData);

      // show loading element
      this.isLoading();

      /* var json = {
        json: JSON.stringify({
            a: 1,
            b: 2
        }),
        delay: 3
      }; */

      var json_data = {
        email: email,
        password: password
      };
      console.log('json_data: ' + json_data);
      console.log('show loading: ' + this.state.isLoading);

      fetch('https://reqres.in/api/login', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: 'json=' + encodeURIComponent(JSON.stringify(json_data))
      })
      .then(response => {
        if (response.ok) {
          response.json().then(json => {
            console.log(json);
            console.log('json token: ' + json.token);
            localStorage.setItem('token', json.token);
          })
        } else if (!response.ok) {
          // FIXME: Show error message
          console.log(response);
          localStorage.setItem('token', 'QpwL5tke4Pnpja7X4');

          this.isLoading();
        }
      }).then(result => {
        alert(result);
      })
      .catch(error => {
          console.log('Request failed', error);
          localStorage.setItem('token', 'QpwL5tke4Pnpja7X4');

          this.isLoading();
      });
      console.log('hide is loading: ' + this.state.isLoading);
    }
  }

  render = () => {
    return (
      <div className="general-login-back">
        <div className="container has-text-centered box login-panel" style={{ maxWidth: '400px' }}>
          {/* <div className="container has-text-centered box"> */}
          <p className="is-size-1">Sign In</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <form
            onSubmit={e => {
              e.preventDefault();
              this.handleSubmit();
            }}>
            <div className="field">
              <div className="control">
                <Input className="input input-width" name="email" type="email" placeholder="email" required value={this.props.email} onChange={this.handleChange} />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <Input className="input input-width" name="password" type="password" placeholder="password" required value={this.props.password} onChange={this.handleChange}/>
              </div>
            </div>

            <div className="field">
              <div className="control buttons is-centered">
                <Input className="button is-medium btn-login" type="submit" value="Sign In" onClick={this.login}  />
              </div>
            </div>

            <div className="field">
              <div className="control buttons is-centered">
                <div>Forgot your password? </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default Login;