import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { json, SetAccessToken } from '../utils/api';
import { IBlog } from '../utils/interfaces';

export default class EditBlog extends Component<IEditBlogProps, IEditBlogState> {

  constructor(props: IEditBlogProps) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };
  }

  handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({ title: event.target.value });
  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => this.setState({ content: event.target.value });


  async componentDidMount() {
    const blog = await json<IBlog>(`/api/blogs/${this.props.match.params.id}`)
    this.setState({ title: blog.title, content: blog.content });
  }

  editBlog = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = { title: this.state.title, content: this.state.content }
    json(`/api/blogs/${this.props.match.params.id}`, 'PUT', data)
      .then(data => {
        console.log(data);
        this.props.history.push('/');
      })
  }

  deleteBlog = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    json(`/api/blogs/${this.props.match.params.id}`, 'DELETE')
      .then(data => {
        console.log(data);
        this.props.history.push('/');
      })
  }

  render() {
    return (
      <div>
        <div className="container">
          <section className="row justify-content-center">
            <article className="col-12">
              <div className="card shadow-sm">
                <div className="card-body">

                  <form className="form-group">
                    <input value={this.state.title} 
                    onChange={this.handleUserChange} 
                    id="title" type="text" 
                    className="form-control shadow-sm mb-3" 
                    placeholder="Title" 
                    aria-label="Title" 
                    aria-describedby="basic-addon1" />

                    <textarea
                      className="shadow-sm form-control mb-3"
                      rows={10}
                      placeholder="Start bloggin'!"
                      value={this.state.content}
                      onChange={this.handleChange}
                    />
                    <button
                      id="editBlog"
                      className="btn btn-primary"
                      onClick={this.editBlog}  //updates Blog when clicked
                    >Edit Blog</button>
                    <button
                      id="deleteBlog"
                      className="btn btn-primary float-right"
                      onClick={this.deleteBlog}  //deletes Blog when clicked
                    >Delete Blog</button>
                  </form>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>


    );
  }

}

interface IEditBlogProps extends RouteComponentProps<{ id: string }> { }
interface IEditBlogState {
  title: string,
  content: string
}