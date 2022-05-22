import { gql } from '@apollo/client'

export const allBalances = gql`
  query AllBalances($cursor: String) {
    allBalances(_cursor: $cursor) {
      data {
        _id
        _ts
        name
        address
        balance
        transactions
      }
      before
      after
    }
  }
`
