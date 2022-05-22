import { gql } from '@apollo/client'

export const balanceByAddress = gql`
  query BalanceByAddress($address: String!, $cursor: String) {
    balanceByAddress(address: $address, _cursor: $cursor) {
      data {
        _id
        _ts
        name
        address
        balance
        transactions
      }
      after
      before
    }
  }
`
