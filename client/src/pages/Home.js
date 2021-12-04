import React from 'react';
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList/index';


import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
 
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center" >

        <div className="col-12 col-md-8 " >
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              
              homeSurvey={true}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
