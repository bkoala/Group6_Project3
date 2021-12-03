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
        
        <div>
          
        </div>
        
      </div>
      <div class="but black">
          {Auth.loggedIn() ? (
            <>
              <div> 


              </div>
              <Link className="profileBtn black waves-effect waves-light btn-large" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
  
              <button className="logOut  black blackwaves-effect waves-light btn-large" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="logBtn black waves-effect waves-light btn-large" to="/login">
                <div class="center"> Login </div>
              </Link>
              <div> </div>
              <Link className="signBtn black blackwaves-effect waves-light btn-large " to="/signup">
                <div class="center"> Signup </div>
              </Link>
            </>
          )}
        </div>
     
    </header>

    

  );
};

export default Header;
