import React, { Component } from 'react';
import { IBlog } from '../utils/interfaces';
import { Link, RouteComponentProps } from 'react-router-dom';
import { json } from '../utils/api';
import HomeCard from '../components/HomeCard';


export default class Home extends Component<IHomeProps, IHomeState> {

  state: IHomeState = {
    blogs: []
  }

  async componentDidMount() {
    const blogs = await json('/api/blogs');
    this.setState({ blogs })
  }

  render() {
    return (
      <main className="container timeline">
        <section className="row justify-content-center">
          <>
            {/* modifies and styles each new blog */}
            {this.state.blogs.map(blog => <HomeCard key={blog.id} blog={blog}/>)}
          </>
        </section>
      </main>
    );
  }

}

export interface IHomeProps extends RouteComponentProps { }

export interface IHomeState {
  blogs: IBlog[]
}

