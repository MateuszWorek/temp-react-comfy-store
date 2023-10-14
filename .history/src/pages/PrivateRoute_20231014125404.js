import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth0();

  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
  // return (
  //   <Route
  //     {...rest}
  //     render={() => {
  //       return user ? children : <Redirect to='/' />;
  //     }}
  //   ></Route>
  // );
};
export default PrivateRoute;
