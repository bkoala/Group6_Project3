import React from 'react';
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
//import ThoughtForm from '../components/ThoughtForm';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
 
  const thoughts = data?.thoughts || [];

  return (
    <main class="  ">
      <div className="  container flex-row justify-center">
        

        <div className="container col-12 col-md-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Existing Surveys"
              homeSurvey={true}
            />
          )}
        </div>                
      </div>
    </main>
  );
};

export default Home;
