import * as React from 'react';
import { IBlog } from '../utils/interfaces';
import { Link } from 'react-router-dom';
import * as moment from 'moment';

const HomeCard: React.FC<HomeCardProps> = ({ blog }) => {

  return (
    <div className="col-md-6">
      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <Link to={`/blogpost/${blog.id}`} className="card-title"><h5>{blog.title}</h5></Link>
          <h6 className="card-author">By {blog.name}</h6>
          <p className="card-date">{moment(blog._created).format('MMMM Do, YYYY')}</p>
          <p className="card-text">{blog.content.substring(0, 75)} ...</p>
          <Link className="link" to={`/edit/${blog.id}`} >
            <button
              id="editButton"
              className="btn"
            >Edit</button>
          </Link>

        </div>
      </div>
    </div>
  );

}

interface HomeCardProps {
  blog: IBlog;
}

export default HomeCard;