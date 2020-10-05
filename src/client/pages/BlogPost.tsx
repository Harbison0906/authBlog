import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import * as moment from 'moment';
import { ITags, IBlog } from '../utils/interfaces';
import { json } from '../utils/api';


export default class BlogPost extends Component<IBlogPostProps, IBlogPostState> {

  constructor(props: IBlogPostProps) {
    super(props);
    this.state = {
      tags: [],
      blogs: null
    };
  }

  async componentDidMount() {
    try {
      let id = this.props.match.params.id;
      // const resBlogtags = await fetch(`/api/blogtags/${id}`);
      const blogtags = await json(`/api/blogtags/${id}`);
      // const resBlogs = await fetch(`/api/blogs/${id}`);
      const blogs = await json(`/api/blogs/${id}`);
      this.setState({ tags: blogtags, blogs });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <section className="row justify-content-center">
        <div className="col-12 shadow-sm">
          <div className="card-body">
            <h4 className="card-title">{this.state.blogs?.title}</h4>
            {this.state.tags.map(tag => (
              <span className="badge badge-pill badge-primary mb-3" key={tag.name}>{tag.name}</span>
            ))}
            <h6 className="card-author">By {this.state.blogs?.name}</h6>
            <p className="card-date">{moment(this.state.blogs?._created).format('MMMM Do, YYYY')}</p>
            <p className="card-text">{this.state.blogs?.content}</p>
          </div>
        </div>
      </section>
    );
  }

}

interface IBlogPostProps extends RouteComponentProps<{ id: string }> { }
interface IBlogPostState {
  tags: ITags[],
  blogs: IBlog
}

