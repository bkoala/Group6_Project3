import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="banner teal text-light mb-5  ">
       <div class="but">
          {Auth.loggedIn() ? (
            <>
              <Link className="log waves-effect waves-light btn-large" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="sign waves-effect waves-light btn-large" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="log waves-effect waves-light btn-large" to="/login">
                <div class="center"> Login </div>
              </Link>
              <Link className="sign waves-effect waves-light btn-large " to="/signup">
                <div class="center"> Signup </div>
              </Link>
            </>
          )}
        </div>
      <div className="tee container teal ">
        <div class=""> 

          
        </div>
        <div class=""> 

          
        </div>
        <div className="row center">
          <Link className="text-light" to="/">
            <h1 className="title header ">EasySurvey 
             <i class=" title titleIcon large material-icons ">poll</i>
            </h1>
          </Link>
          <p className="fade-in  container m-1">Post or take a survey</p>
        </div>
        <div>
          
        </div>
        
      </div>
     
    </header>
  );
};

export default Header;
