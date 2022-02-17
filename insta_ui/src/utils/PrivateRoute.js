import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { connect } from "react-redux";
 
// handle the private routes
const PrivateRoute = ({ component: Component,authenticated, ...rest }) => {
  // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  // console.log('auth',auth);
  return authenticated === false ? <Navigate to="/login" /> : <Outlet />;

  // return(
  //   <Routes>
  //     <Route
  //         {...rest}
  //         render={(props) =>
  //           authenticated === false ? (
  //             <Navigate to="/login" />
  //           ) : (
  //             <Component {...props} />
  //           )
  //         }
  //       />
  //   </Routes>
  // )
}
 
const mapStateToProps = (state) => {
  return {
    authenticated: state.user.authenticated,
  };
};

export default connect(mapStateToProps)(PrivateRoute);