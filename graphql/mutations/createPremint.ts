import { gql } from '@apollo/client'

export const createPremint = gql`
  mutation CreatePremint($data: PremintInput!) {
    createPremint(data: $data) {
      _id
      _ts
    }
  }
`
