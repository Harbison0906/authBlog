import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { User } from '../utils/api';



class PrivateRoute extends React.Component<PrivateRouteProps, PrivateRouteState> {


  render() {
      if (!User || User.userid === null || User.role !== 'guest') {
        return <Redirect to="/login"/>
      } else {
        return <Route {...this.props}/>
      }
  };

}

interface PrivateRouteProps {
  
}

interface PrivateRouteState {}

export default PrivateRoute