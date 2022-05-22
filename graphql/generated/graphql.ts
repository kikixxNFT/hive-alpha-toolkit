/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any
  Time: any
}

export type Balance = {
  __typename?: 'Balance'
  /** The document's ID. */
  _id: Scalars['ID']
  /** The document's timestamp. */
  _ts: Scalars['Long']
  address: Scalars['String']
  balance: Scalars['String']
  name: Scalars['String']
  transactions: Scalars['Int']
}

/** 'Balance' input values */
export type BalanceInput = {
  address: Scalars['String']
  balance: Scalars['String']
  name: Scalars['String']
  transactions: Scalars['Int']
}

/** The pagination object for elements of type 'Balance'. */
export type BalancePage = {
  __typename?: 'BalancePage'
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>
  /** The elements of type 'Balance' in this page. */
  data: Array<Maybe<Balance>>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Create a new document in the collection of 'Balance' */
  createBalance: Balance
  /** Delete an existing document in the collection of 'Balance' */
  deleteBalance?: Maybe<Balance>
  /** Partially updates an existing document in the collection of 'Balance'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateBalance?: Maybe<Balance>
  /** Update an existing document in the collection of 'Balance' */
  updateBalance?: Maybe<Balance>
}

export type MutationCreateBalanceArgs = {
  data: BalanceInput
}

export type MutationDeleteBalanceArgs = {
  id: Scalars['ID']
}

export type MutationPartialUpdateBalanceArgs = {
  data: PartialUpdateBalanceInput
  id: Scalars['ID']
}

export type MutationUpdateBalanceArgs = {
  data: BalanceInput
  id: Scalars['ID']
}

/** 'Balance' input values */
export type PartialUpdateBalanceInput = {
  address?: InputMaybe<Scalars['String']>
  balance?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  transactions?: InputMaybe<Scalars['Int']>
}

export type Query = {
  __typename?: 'Query'
  allBalances: BalancePage
  balanceByAddress: QueryBalanceByAddressPage
  /** Find a document from the collection of 'Balance' by its id. */
  findBalanceByID?: Maybe<Balance>
}

export type QueryAllBalancesArgs = {
  _cursor?: InputMaybe<Scalars['String']>
  _size?: InputMaybe<Scalars['Int']>
}

export type QueryBalanceByAddressArgs = {
  _cursor?: InputMaybe<Scalars['String']>
  _size?: InputMaybe<Scalars['Int']>
  address?: InputMaybe<Scalars['String']>
}

export type QueryFindBalanceByIdArgs = {
  id: Scalars['ID']
}

/** The pagination object for elements of type 'Balance'. */
export type QueryBalanceByAddressPage = {
  __typename?: 'QueryBalanceByAddressPage'
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>
  /** The elements of type 'Balance' in this page. */
  data: Array<Maybe<Balance>>
}

export type AllBalancesQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']>
}>

export type AllBalancesQuery = {
  __typename?: 'Query'
  allBalances: {
    __typename?: 'BalancePage'
    before?: string | null
    after?: string | null
    data: Array<{
      __typename?: 'Balance'
      _id: string
      _ts: any
      name: string
      address: string
      balance: string
      transactions: number
    } | null>
  }
}

export type BalanceByAddressQueryVariables = Exact<{
  address: Scalars['String']
  cursor?: InputMaybe<Scalars['String']>
}>

export type BalanceByAddressQuery = {
  __typename?: 'Query'
  balanceByAddress: {
    __typename?: 'QueryBalanceByAddressPage'
    after?: string | null
    before?: string | null
    data: Array<{
      __typename?: 'Balance'
      _id: string
      _ts: any
      name: string
      address: string
      balance: string
      transactions: number
    } | null>
  }
}

export const AllBalancesDocument = gql`
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

/**
 * __useAllBalancesQuery__
 *
 * To run a query within a React component, call `useAllBalancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBalancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBalancesQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useAllBalancesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllBalancesQuery,
    AllBalancesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AllBalancesQuery, AllBalancesQueryVariables>(
    AllBalancesDocument,
    options
  )
}
export function useAllBalancesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllBalancesQuery,
    AllBalancesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AllBalancesQuery, AllBalancesQueryVariables>(
    AllBalancesDocument,
    options
  )
}
export type AllBalancesQueryHookResult = ReturnType<typeof useAllBalancesQuery>
export type AllBalancesLazyQueryHookResult = ReturnType<
  typeof useAllBalancesLazyQuery
>
export type AllBalancesQueryResult = Apollo.QueryResult<
  AllBalancesQuery,
  AllBalancesQueryVariables
>
export const BalanceByAddressDocument = gql`
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

/**
 * __useBalanceByAddressQuery__
 *
 * To run a query within a React component, call `useBalanceByAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalanceByAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalanceByAddressQuery({
 *   variables: {
 *      address: // value for 'address'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useBalanceByAddressQuery(
  baseOptions: Apollo.QueryHookOptions<
    BalanceByAddressQuery,
    BalanceByAddressQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<BalanceByAddressQuery, BalanceByAddressQueryVariables>(
    BalanceByAddressDocument,
    options
  )
}
export function useBalanceByAddressLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BalanceByAddressQuery,
    BalanceByAddressQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    BalanceByAddressQuery,
    BalanceByAddressQueryVariables
  >(BalanceByAddressDocument, options)
}
export type BalanceByAddressQueryHookResult = ReturnType<
  typeof useBalanceByAddressQuery
>
export type BalanceByAddressLazyQueryHookResult = ReturnType<
  typeof useBalanceByAddressLazyQuery
>
export type BalanceByAddressQueryResult = Apollo.QueryResult<
  BalanceByAddressQuery,
  BalanceByAddressQueryVariables
>
