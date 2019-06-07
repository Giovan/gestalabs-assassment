import React from "react";
import "./Home.sass";

class Home extends React.Component {
  constructor(props) {
    super(props);
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

  getUserList = () => {
    if ((this.state.email === '' && this.state.email.length < 6) || (this.state.password === '' && this.state.email.length < 6)) {
      //Show error notification
    } else {
      // show loading element
      this.isLoading();

      /* var json = {
        json: JSON.stringify({
            a: 1,
            b: 2
        }),
        delay: 3
      }; */

      /* var json_data = {
        email: email,
        password: password
      };
      console.log('json_data: ' + json_data);
      console.log('show loading: ' + this.state.isLoading); */

      fetch('https://reqres.in/api/users?delay=4', {
        method: 'get',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
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
  componentDidMount = () => {

  }
  render = () => {
    return (
      <div className="">
          -
      </div>
    );
  }
}

export default Home;