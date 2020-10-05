import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class JumboNav extends Component<JumboNavProps, JumboNavState> {


  render() {
    return (
      
        <div className="jumbotron jumbotron-fluid bg-danger">
          <div className="container text-center">
            <h1 className="display-4 align-middle">Attack of the Blog</h1>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Link className="btn btn-link mx-2 text-white" to="/">
              Home
        </Link>
            <Link className="btn btn-link mx-2 text-white" to="/newblog">
              New Post
        </Link>
          </div>
        </div>

      
    );
  }

}

export interface JumboNavProps { }

export interface JumboNavState { }






