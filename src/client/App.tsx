import * as React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import NewBlog from './pages/NewBlog';
import EditBlog from './pages/EditBlog';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';
import JumboNav from './components/JumboNav';

export default class App extends React.Component {

	render() {
		return (
			<BrowserRouter>
				<JumboNav />
				<main className="container" id="background">
					<Switch>
						<Route exact path="/" component={Home} />
						<PrivateRoute exact path="/newblog" component={NewBlog} />
						<Route exact path="/edit/:id" component={EditBlog} />
						<Route exact path="/blogpost/:id" component={BlogPost} />
						<Route exact path="/login" component={Login} />
						<Redirect from="*" to="/" />
					</Switch>
				</main>
			</BrowserRouter>

		);
	}
}


