import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { json, User } from '../utils/api';


export default class Login extends Component<ILoginProps, ILoginState> {

  constructor(props: ILoginProps) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  };

  handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value })
  };

  handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value })
  };



  render() {
    return (
      <main>
        <h1>LOGIN PAGE</h1>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" value={this.state.email}/>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" value={this.state.password}/>
        </div>
        <div>
        <button type="button" className="btn btn-primary btn-lg">Login</button>
        </div>
      </main>
    );
  };

}


interface ILoginProps extends RouteComponentProps { }

interface ILoginState {
  email: string;
  password: string;
}