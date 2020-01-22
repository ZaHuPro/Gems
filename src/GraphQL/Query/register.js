import React from "react";
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const REGISTER = gql`
  mutation register($first_name:String!,$last_name:String!, $email:String!, $password:String!) {
    register(first_name:$first_name,last_name:$last_name, email:$email, password:$password){
      email
      token
      first_name
      last_name
    }
  }
`;

const withRegiser = (Component) => {
    return (props) => {
        const [register] = useMutation(REGISTER)
        return (
            <Component
                {...props}
                registerNow={register}
            />
        )
    }
}

export default withRegiser
