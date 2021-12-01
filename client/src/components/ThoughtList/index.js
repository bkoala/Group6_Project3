import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';

import { REMOVE_SINGLE_THOUGHT } from '../../utils/mutations';
import { isTypeSystemDefinitionNode } from 'graphql';


const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,

}) => {

  const [removeThought] = useMutation(REMOVE_SINGLE_THOUGHT);

 

  if (!thoughts.length) {
    return <h3>No Surveys posted Yet</h3>;
  }


 //Loop through array and add votes for each survey
 
 let TV1 = 0; 
 let TV2 = 0;
 let TV3 = 0;
 let TV4 = 0;
 let Tvn=new Array();
 let Tvnotes=[];
for (let ii=0;ii<thoughts.length; ii++)  {

     for (let jj=0;jj< (thoughts[ii].comments.length) ; jj++){
      //console.log("sdfad" ,thoughts[ii].comments[jj].V1)
       TV1 += thoughts[ii].comments[jj].V1;
       TV2 +=thoughts[ii].comments[jj].V2;
       TV3 +=thoughts[ii].comments[jj].V3;
       TV4 +=thoughts[ii].comments[jj].V4;

     }
      Tvn=[TV1,TV2,TV3,TV4];
      TV1=0;TV2=0;TV3=0;TV4=0;  
    Tvnotes.push(Tvn);
    }
  
//Delete Survey
  const handleDeleteThought = (event) =>{
   
   const thoughtId= event.target.value;
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
        return false;
    }
    try {
        const response = removeThought({
            variables: {              
              thoughtId:thoughtId,
            },
        });
        if (!response) {
            throw new Error("Something went wrong.");
        }
        removeThought(thoughtId);
        setTimeout(() => {
          window.location.assign('/me');
        }, 10);
    } catch (err) {
        console.error("test mis " , err);
    }
    
};
   

   //
  return (
    <div>
    
      {showTitle && <h3>{title}</h3>}
      
      {thoughts &&
        thoughts.map((thought,ii) => (
          <div key={thought._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
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
            <div className="card-body bg-light p-2">
              <p>{thought.thoughtText}</p>
             
            </div>
            <div className="card-footer">
            <p> Total Votes</p>
            <table><tr><td>{thought.A1} : </td> <td> {Tvnotes[ii][0]}</td> <td>{thought.A2} : </td> <td> {Tvnotes[ii][1]}</td> 
             {(thought.A3!=="") ?(
               <><td>{thought.A3}: </td><td> {Tvnotes[ii][2]}</td></> 
             ):( <br/>)}
             {(thought.A4!=="") ?(
               <><td>{thought.A4}: </td><td> {Tvnotes[ii][3]}</td></> 
             ):(<br/>)}
             </tr></table>
            </div>

            {(Auth.loggedIn() && Auth.getProfile().data.username ===thought.thoughtAuthor) ? (
    
     <button className="btn btn-primary btn-block btn-squared" name="btnDelete" value={thought._id} onClick={handleDeleteThought} >
    Delete Survey
   </button>

          
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
