import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';

import { REMOVE_SINGLE_THOUGHT } from '../../utils/mutations';

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
   profilePage= false,
}) => {
  if (!thoughts.length) {
    return <h3>No Surveys posted Yet</h3>;
  }
  //console.log(thoughts);
 //Loop through array and add votes 
  let TV1 = 0; 
  let TV2 = 0;
  let TV3 = 0;
  let TV4 = 0;
  let Tvotes,Tv=new Array();
  
    
  return (
    <div class= "roundElement">
    
      {showTitle && <h3>{title}</h3>}
      {thoughts &&
        thoughts.map((thought,ii) => (
          <div key={thought._id} className="teal roundElement card blue-gray mb-3">
            <h4 className="">
              {showUsername ? (
                <Link
                  className="center roundElement text-light"
                  to={`/profiles/${thought.thoughtAuthor}`}
                >
                  {thought.thoughtAuthor} <br />
                  
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    Posted by you on {thought.createdAt}
                  </span>
                </>

                
              )}
            </h4>
            <div className="card blue-gray bg-light p-2">
              <p>{thought.thoughtText}</p>
             
            </div>
            <div className=" roundElementcard-footer">
            <p> Votes</p>
            <table><tr><td>{thought.A1} : </td> <td> {TV1}</td> </tr>
            <tr><td>{thought.A2} : </td> <td> {TV2}</td> </tr>
             {(thought.A3!=="") ?(
               <tr><td>{thought.A3} : </td> <td> {TV3}</td> </tr>
             ):( <br/>)}
             {(thought.A4!=="") ?(
               <tr><td>{thought.A4} : </td> <td> {TV4}</td> </tr>
             ):(<br/>)}
             </table>
            </div>


            {(Auth.loggedIn() && Auth.getProfile().data.username ===thought.thoughtAuthor) ? (
              <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/deleted/${thought._id}`}
            >
              Delete Survey.
            </Link> 
            
            ):(
              
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${thought._id}`}
            >
              Take Survey.
            </Link>
            )}
          </div>
        ))}
        
    </div>

  );
};

export default ThoughtList;
