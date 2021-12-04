import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_THOUGHT } from '../../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const ThoughtForm = () => {
  const [formState, setFormState] = useState({
    thoughtText: '',
    A1: '',
    A2: '',
    A3: '',
    A4: '',
  });

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

        cache.writeQuery({
          query: QUERY_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addThought({
        variables: {
     ...formState,
          thoughtAuthor: Auth.getProfile().data.username,
        },
      });

      setFormState('');
     setTimeout(() => {
        window.location.assign('/me');
      }, 10);
    } catch (err) {
      console.error("Errors with your information.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
setFormState({
      ...formState,
      [name]: value,
    });
    
  };

  return (
    <div>
      <h3>Add a Survey </h3>

      {Auth.loggedIn() ? (
        <>
      
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">              
              <input
                  className="form-inputsurvey"  placeholder="Survey Question" name="thoughtText" type="text"
                  value={formState.name} onChange={handleChange}
                />
            <input
                  className="form-input" placeholder="Survey choice" name="A1" type="text"
                  value={formState.name} onChange={handleChange}
                />
             <input
                  className="form-input" placeholder="Survey choice" name="A2" type="text"
                  value={formState.name} onChange={handleChange}
                />
           
               <input
                  className="form-input" placeholder="Optional Third Survey choice" name="A3" type="text"
                  value={formState.name} onChange={handleChange}
                />

               <input
                  className="form-input" placeholder="Optional Fourth Survey choice" name="A4" type="text"
                  value={formState.name} onChange={handleChange}
                />
            </div>
            <div className="col-12 col-lg-9">

              <button className="btn btn-primary btn-block align-center" type="submit">
               <p style ={{paddingBottom:'5px'}} > Post Survey </p>
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
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

export default ThoughtForm;
