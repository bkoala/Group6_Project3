import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
    
      {showTitle && <h3>{title}</h3>}
      {thoughts &&
        thoughts.map((thought) => (
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

            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${thought._id}`}
            >
              Take Survey.
            </Link>
         
          </div>
        ))}
        
    </div>

    //End of files
  );
};

export default ThoughtList;
