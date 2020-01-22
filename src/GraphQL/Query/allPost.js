import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_ALL_ACTOR = gql`
  {
    posts{
      id
      title
    }
  }
`;

const withallPost = (Component) => {
    return (props) => {
        const { loading, error, data , refetch} = useQuery(GET_ALL_ACTOR)
        return (
            <Component
                {...props}
                Data={data ? data.posts : data}
                Loading={loading}
                Error={error ? error.message : error}
                Refetch= {refetch}
                
            />
        )
    }
}

export default withallPost
