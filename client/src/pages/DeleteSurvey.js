import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useMutation  } from '@apollo/client';

//import CommentList from '../components/CommentList';
//import CommentForm from '../components/CommentForm';

import { REMOVE_SINGLE_THOUGHT } from '../utils/mutations';

const DeleteSurvey = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { thoughtId } = useParams();

console.log(thoughtId)
  const [removeThought,{error}] = useMutation(REMOVE_SINGLE_THOUGHT);

 const handleRemoveItem = thoughtId => {
  

    try {
      const { data } = removeThought({
        variables: {thoughtId:thoughtId }
        });
     return
    } catch (err) {
      console.error("DFDFDFDFDF ", err);
    }
  };


}
export default DeleteSurvey;