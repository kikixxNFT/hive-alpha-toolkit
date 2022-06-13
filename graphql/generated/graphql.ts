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
  /** Create a new document in the collection of 'Premint' */
  createPremint: Premint
  /** Delete an existing document in the collection of 'Balance' */
  deleteBalance?: Maybe<Balance>
  /** Delete an existing document in the collection of 'Premint' */
  deletePremint?: Maybe<Premint>
  /** Partially updates an existing document in the collection of 'Balance'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateBalance?: Maybe<Balance>
  /** Partially updates an existing document in the collection of 'Premint'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdatePremint?: Maybe<Premint>
  /** Update an existing document in the collection of 'Balance' */
  updateBalance?: Maybe<Balance>
  /** Update an existing document in the collection of 'Premint' */
  updatePremint?: Maybe<Premint>
}

export type MutationCreateBalanceArgs = {
  data: BalanceInput
}

export type MutationCreatePremintArgs = {
  data: PremintInput
}

export type MutationDeleteBalanceArgs = {
  id: Scalars['ID']
}

export type MutationDeletePremintArgs = {
  id: Scalars['ID']
}

export type MutationPartialUpdateBalanceArgs = {
  data: PartialUpdateBalanceInput
  id: Scalars['ID']
}

export type MutationPartialUpdatePremintArgs = {
  data: PartialUpdatePremintInput
  id: Scalars['ID']
}

export type MutationUpdateBalanceArgs = {
  data: BalanceInput
  id: Scalars['ID']
}

export type MutationUpdatePremintArgs = {
  data: PremintInput
  id: Scalars['ID']
}

/** 'Balance' input values */
export type PartialUpdateBalanceInput = {
  address?: InputMaybe<Scalars['String']>
  balance?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  transactions?: InputMaybe<Scalars['Int']>
}

/** 'Premint' input values */
export type PartialUpdatePremintInput = {
  discord_link?: InputMaybe<Scalars['String']>
  mint_date?: InputMaybe<Scalars['String']>
  mint_price?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  official_link?: InputMaybe<Scalars['String']>
  raffle_time?: InputMaybe<Scalars['String']>
  registration_closes?: InputMaybe<Scalars['String']>
  twitter_link?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export type Premint = {
  __typename?: 'Premint'
  /** The document's ID. */
  _id: Scalars['ID']
  /** The document's timestamp. */
  _ts: Scalars['Long']
  discord_link?: Maybe<Scalars['String']>
  mint_date?: Maybe<Scalars['String']>
  mint_price?: Maybe<Scalars['String']>
  name: Scalars['String']
  official_link?: Maybe<Scalars['String']>
  raffle_time?: Maybe<Scalars['String']>
  registration_closes?: Maybe<Scalars['String']>
  twitter_link?: Maybe<Scalars['String']>
  url: Scalars['String']
}

/** 'Premint' input values */
export type PremintInput = {
  discord_link?: InputMaybe<Scalars['String']>
  mint_date?: InputMaybe<Scalars['String']>
  mint_price?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  official_link?: InputMaybe<Scalars['String']>
  raffle_time?: InputMaybe<Scalars['String']>
  registration_closes?: InputMaybe<Scalars['String']>
  twitter_link?: InputMaybe<Scalars['String']>
  url: Scalars['String']
}

/** The pagination object for elements of type 'Premint'. */
export type PremintPage = {
  __typename?: 'PremintPage'
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>
  /** The elements of type 'Premint' in this page. */
  data: Array<Maybe<Premint>>
}

export type Query = {
  __typename?: 'Query'
  allBalances: BalancePage
  allPremints: PremintPage
  balanceByAddress: QueryBalanceByAddressPage
  /** Find a document from the collection of 'Balance' by its id. */
  findBalanceByID?: Maybe<Balance>
  /** Find a document from the collection of 'Premint' by its id. */
  findPremintByID?: Maybe<Premint>
}

export type QueryAllBalancesArgs = {
  _cursor?: InputMaybe<Scalars['String']>
  _size?: InputMaybe<Scalars['Int']>
}

export type QueryAllPremintsArgs = {
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

export type QueryFindPremintByIdArgs = {
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

export type CreatePremintMutationVariables = Exact<{
  data: PremintInput
}>

export type CreatePremintMutation = {
  __typename?: 'Mutation'
  createPremint: { __typename?: 'Premint'; _id: string; _ts: any }
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

export type AllPremintsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']>
}>

export type AllPremintsQuery = {
  __typename?: 'Query'
  allPremints: {
    __typename?: 'PremintPage'
    before?: string | null
    after?: string | null
    data: Array<{
      __typename?: 'Premint'
      _id: string
      _ts: any
      url: string
      name: string
      official_link?: string | null
      raffle_time?: string | null
      registration_closes?: string | null
      mint_date?: string | null
      mint_price?: string | null
      twitter_link?: string | null
      discord_link?: string | null
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

export const CreatePremintDocument = gql`
  mutation CreatePremint($data: PremintInput!) {
    createPremint(data: $data) {
      _id
      _ts
    }
  }
`
export type CreatePremintMutationFn = Apollo.MutationFunction<
  CreatePremintMutation,
  CreatePremintMutationVariables
>

/**
 * __useCreatePremintMutation__
 *
 * To run a mutation, you first call `useCreatePremintMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePremintMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPremintMutation, { data, loading, error }] = useCreatePremintMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePremintMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePremintMutation,
    CreatePremintMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreatePremintMutation,
    CreatePremintMutationVariables
  >(CreatePremintDocument, options)
}
export type CreatePremintMutationHookResult = ReturnType<
  typeof useCreatePremintMutation
>
export type CreatePremintMutationResult =
  Apollo.MutationResult<CreatePremintMutation>
export type CreatePremintMutationOptions = Apollo.BaseMutationOptions<
  CreatePremintMutation,
  CreatePremintMutationVariables
>
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
export const AllPremintsDocument = gql`
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

/**
 * __useAllPremintsQuery__
 *
 * To run a query within a React component, call `useAllPremintsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPremintsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPremintsQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useAllPremintsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllPremintsQuery,
    AllPremintsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AllPremintsQuery, AllPremintsQueryVariables>(
    AllPremintsDocument,
    options
  )
}
export function useAllPremintsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllPremintsQuery,
    AllPremintsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AllPremintsQuery, AllPremintsQueryVariables>(
    AllPremintsDocument,
    options
  )
}
export type AllPremintsQueryHookResult = ReturnType<typeof useAllPremintsQuery>
export type AllPremintsLazyQueryHookResult = ReturnType<
  typeof useAllPremintsLazyQuery
>
export type AllPremintsQueryResult = Apollo.QueryResult<
  AllPremintsQuery,
  AllPremintsQueryVariables
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
