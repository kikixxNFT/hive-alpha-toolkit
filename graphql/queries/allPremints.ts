import { gql } from '@apollo/client'

export const allPremints = gql`
  query AllPremints($cursor: String) {
    allPremints(_cursor: $cursor) {
      data {
        _id
        _ts
        url
        name
        official_link
        raffle_time
        registration_closes
        mint_date
        mint_price
        twitter_link
        discord_link
      }
      before
      after
    }
  }
`
