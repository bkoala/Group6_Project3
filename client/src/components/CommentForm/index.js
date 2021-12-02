import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_COMMENT } from '../../utils/mutations';

import Auth from '../../utils/auth';
//import CommentList from '../CommentList';


const CommentForm = ({ thoughtId ,thought}) => {

  const [V1, setVote1] = useState('0');
  const [V2, setVote2] = useState('0');
  const [V3, setVote3] = useState('0');
  const [V4, setVote4] = useState('0');
  const [commentText, setCommentText] = useState('Votes');



 const [characterCount, setCharacterCount] = useState(0);
  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {thoughtId, commentText:commentText, 
        V1:parseInt(V1),V2:parseInt(V2),V3:parseInt(V3),V4:parseInt(V4),
          commentAuthor: Auth.getProfile().data.username,
        },
      });

      setCommentText('');
      setTimeout(() => {
        window.location.assign('/');
      }, 10);
    } catch (err) {
      console.error("DFDFDFDFDF ", err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
      if(name==="vote" && value==="1"){
        setVote1('1')}
      if(name==="vote" && value==="2"){setVote2('1')}
       if(name==="vote" && value==="3"){setVote3('1')}
       if(name==="vote" && value==="4"){setVote4('1')}
    setCommentText('Votes');
  };

  return (
    <div>
  
      {Auth.loggedIn() ? (
        <>
 
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9" onChange={handleChange}>
              <p> {thought.thoughtText}</p>
              <input type="radio" id="A1" name="vote" value="1"  ></input>
              <label >{thought.A1}</label><br/>
              <input type="radio" id="A1" name="vote" value="2"  ></input>
              <label >{thought.A2}</label><br/>
              {(thought.A3!=="")?(
             <> <input type="radio" id="A1" name="vote" value="3"  ></input>
              <label >{thought.A3}</label><br/></>
              ):(<br/>) } 
              {(thought.A4!=="")?(
             <> <input type="radio" id="A1" name="vote" value="4" ></input>
              <label >{thought.A4}</label><br/></>
              ):(<br/>) }
             
              </div>
             
              <div className="col-12 col-lg-9"> 
              <input type="hidden" id="commentText" name="commentText" value={commentText} ></input>
              </div>
            <div className="col-12 col-lg-9">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Submit
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to post a survey. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default CommentForm;
