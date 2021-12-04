import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

//import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm/index';

import { QUERY_SINGLE_THOUGHT } from '../utils/queries';

const SingleThought = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    // pass URL parameter
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
  
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a'}}>
        <CommentForm thoughtId={thought._id} thought={thought} />
      </div>
    </div>
  );
};

export default SingleThought;
