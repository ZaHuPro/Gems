import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_ALL_USER = gql`
  {
    allUser{
      email
      last_name
      first_name
    }
  }
`;

const withallUser = (Component) => {
    return (props) => {
        const { loading, error, data , refetch} = useQuery(GET_ALL_USER, { errorPolicy: 'all' })
        console.log(loading, error, data , refetch)
        return (
            <Component
                {...props}
                Data={data ? data.allUser : data}
                Loading={loading}
                Error={error}
                Refetch= {refetch}
                
            />
        )
    }
}

export default withallUser
