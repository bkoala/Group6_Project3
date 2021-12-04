/*import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">EasySurvey</h1>
          </Link>
          <p className="m-0">Post or take a survey</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
*/
import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className=" orange darken-3 rtext-light mb-5  ">
      
      
      <div className="tee container orange darken-3
       ">
        <div class=""> 
          
        </div>
        <div class=""> 
          
        </div>
        <div className=" orange darken-3 row center">
          <Link className="text-light" to="/">
            <h1 className="title header ">EasySurvey 
             <i class=" title titleIcon large material-icons ">poll</i>
            </h1>
          </Link>
          <p className="fade-in text-light  container center ">Post or take a survey</p>
        </div>
        <div class="but">
          {Auth.loggedIn() ? (
            <>
              <Link className="log black waves-effect waves-light btn-large" to="/me">
              <div class="center"> {Auth.getProfile().data.username}'s profile </div>
              </Link>
              <button className="log black waves-effect waves-light btn-large" onClick={logout}>
              <div class="center">  Logout </div>
              </button>
            </>
          ) : (
            <>
              <Link className="log black waves-effect waves-light btn-large" to="/login">
                <div class="center"> Login </div>
              </Link>
              <Link className="sign black waves-effect waves-light btn-large " to="/signup">
                <div class="center"> Signup </div>
              </Link>
            </>
          )}
        </div>
        <div>
          
        </div>
        
      </div>
     
    </header>
  );
};
export default Header;






