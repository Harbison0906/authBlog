import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json, SetAccessToken } from '../utils/api';


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

  handleLoginSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      let result = await json('/auth/login', 'POST', {
        email: this.state.email,
        password: this.state.password
      });
      if (result) {
        SetAccessToken(result.token, { userid: result.userid, role: result.role });
        if (result.role === 1) {
          this.props.history.push('/newblog');
        } else {
          this.props.history.push('/');
        }
      } else {
      }
    } catch (e) {
      throw e;
    }

  }



  render() {
    return (
      <main>
        <h1>LOGIN PAGE</h1>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" onChange={this.handleEmailChange} value={this.state.email} />
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" onChange={this.handlePasswordChange} value={this.state.password} />
        </div>
        <div>
          <button type="button" className="btn btn-primary btn-lg" onClick={this.handleLoginSubmit}>Login</button>
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