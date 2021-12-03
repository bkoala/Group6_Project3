/*import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
         UW bootcamp - Group - 6 [xxxxxxxxx]
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
*/
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="teal w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        <div class="">
          <h4>
            UW bootcamp - Group - 6 [xxxxxxxxx] Like what you see? Donate here <a class="btn-floating teal lighten-3 btn-large pulse"><i class="material-icons">attach_money</i></a>
           
             
           </h4>
           

        </div> 
        
        
      </div>
    </footer>
  );
};

export default Footer;