import * as React from 'react';
import { User } from '../utils/api';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute: React.FC<PrivateRouteProps> = ({component, ...rest }) => {
  
  if(User && User.role === 'guest' && User.userid) {
    return <Route {...rest} component={component}/>
  } else {
    return <Redirect to="/login" />
  }
  
}

interface PrivateRouteProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

export default PrivateRoute;