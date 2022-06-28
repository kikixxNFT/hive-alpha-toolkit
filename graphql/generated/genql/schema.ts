import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    DateTime: any,
    String: string,
    ID: string,
    Boolean: boolean,
}

export interface Mutation {
    createRaffle?: Raffle
    deleteRaffleById?: Raffle
    updateRaffleById?: Raffle
    __typename: 'Mutation'
}

export interface Query {
    getRaffleById?: Raffle
    getRaffles?: (Raffle | undefined)[]
    __typename: 'Query'
}

export interface Raffle {
    createdAt?: Scalars['DateTime']
    discord_link?: Scalars['String']
    id: Scalars['ID']
    mint_date?: Scalars['String']
    mint_price?: Scalars['String']
    name: Scalars['String']
    official_link?: Scalars['String']
    raffle_time?: Scalars['String']
    registration_closed?: Scalars['Boolean']
    registration_closes?: Scalars['String']
    twitter_link?: Scalars['String']
    updatedAt?: Scalars['DateTime']
    url: Scalars['String']
    __typename: 'Raffle'
}

export type SortOrder = 'asc' | 'desc'

export interface MutationRequest{
    createRaffle?: [{discord_link?: (Scalars['String'] | null),mint_date?: (Scalars['String'] | null),mint_price?: (Scalars['String'] | null),name: Scalars['String'],official_link?: (Scalars['String'] | null),raffle_time?: (Scalars['String'] | null),registration_closes?: (Scalars['String'] | null),twitter_link?: (Scalars['String'] | null),url: Scalars['String']},RaffleRequest]
    deleteRaffleById?: [{id: Scalars['ID']},RaffleRequest]
    updateRaffleById?: [{discord_link?: (Scalars['String'] | null),id: Scalars['ID'],mint_date?: (Scalars['String'] | null),mint_price?: (Scalars['String'] | null),name?: (Scalars['String'] | null),official_link?: (Scalars['String'] | null),raffle_time?: (Scalars['String'] | null),registration_closes?: (Scalars['String'] | null),twitter_link?: (Scalars['String'] | null),url?: (Scalars['String'] | null)},RaffleRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryRequest{
    getRaffleById?: [{id: Scalars['String']},RaffleRequest]
    getRaffles?: [{sortBy?: (SortOrder | null)},RaffleRequest] | RaffleRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RaffleRequest{
    createdAt?: boolean | number
    discord_link?: boolean | number
    id?: boolean | number
    mint_date?: boolean | number
    mint_price?: boolean | number
    name?: boolean | number
    official_link?: boolean | number
    raffle_time?: boolean | number
    registration_closed?: boolean | number
    registration_closes?: boolean | number
    twitter_link?: boolean | number
    updatedAt?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Mutation_possibleTypes: string[] = ['Mutation']
export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes: string[] = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const Raffle_possibleTypes: string[] = ['Raffle']
export const isRaffle = (obj?: { __typename?: any } | null): obj is Raffle => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRaffle"')
  return Raffle_possibleTypes.includes(obj.__typename)
}


export interface MutationPromiseChain{
    createRaffle: ((args: {discord_link?: (Scalars['String'] | null),mint_date?: (Scalars['String'] | null),mint_price?: (Scalars['String'] | null),name: Scalars['String'],official_link?: (Scalars['String'] | null),raffle_time?: (Scalars['String'] | null),registration_closes?: (Scalars['String'] | null),twitter_link?: (Scalars['String'] | null),url: Scalars['String']}) => RafflePromiseChain & {get: <R extends RaffleRequest>(request: R, defaultValue?: (FieldsSelection<Raffle, R> | undefined)) => Promise<(FieldsSelection<Raffle, R> | undefined)>}),
    deleteRaffleById: ((args: {id: Scalars['ID']}) => RafflePromiseChain & {get: <R extends RaffleRequest>(request: R, defaultValue?: (FieldsSelection<Raffle, R> | undefined)) => Promise<(FieldsSelection<Raffle, R> | undefined)>}),
    updateRaffleById: ((args: {discord_link?: (Scalars['String'] | null),id: Scalars['ID'],mint_date?: (Scalars['String'] | null),mint_price?: (Scalars['String'] | null),name?: (Scalars['String'] | null),official_link?: (Scalars['String'] | null),raffle_time?: (Scalars['String'] | null),registration_closes?: (Scalars['String'] | null),twitter_link?: (Scalars['String'] | null),url?: (Scalars['String'] | null)}) => RafflePromiseChain & {get: <R extends RaffleRequest>(request: R, defaultValue?: (FieldsSelection<Raffle, R> | undefined)) => Promise<(FieldsSelection<Raffle, R> | undefined)>})
}

export interface MutationObservableChain{
    createRaffle: ((args: {discord_link?: (Scalars['String'] | null),mint_date?: (Scalars['String'] | null),mint_price?: (Scalars['String'] | null),name: Scalars['String'],official_link?: (Scalars['String'] | null),raffle_time?: (Scalars['String'] | null),registration_closes?: (Scalars['String'] | null),twitter_link?: (Scalars['String'] | null),url: Scalars['String']}) => RaffleObservableChain & {get: <R extends RaffleRequest>(request: R, defaultValue?: (FieldsSelection<Raffle, R> | undefined)) => Observable<(FieldsSelection<Raffle, R> | undefined)>}),
    deleteRaffleById: ((args: {id: Scalars['ID']}) => RaffleObservableChain & {get: <R extends RaffleRequest>(request: R, defaultValue?: (FieldsSelection<Raffle, R> | undefined)) => Observable<(FieldsSelection<Raffle, R> | undefined)>}),
    updateRaffleById: ((args: {discord_link?: (Scalars['String'] | null),id: Scalars['ID'],mint_date?: (Scalars['String'] | null),mint_price?: (Scalars['String'] | null),name?: (Scalars['String'] | null),official_link?: (Scalars['String'] | null),raffle_time?: (Scalars['String'] | null),registration_closes?: (Scalars['String'] | null),twitter_link?: (Scalars['String'] | null),url?: (Scalars['String'] | null)}) => RaffleObservableChain & {get: <R extends RaffleRequest>(request: R, defaultValue?: (FieldsSelection<Raffle, R> | undefined)) => Observable<(FieldsSelection<Raffle, R> | undefined)>})
}

export interface QueryPromiseChain{
    getRaffleById: ((args: {id: Scalars['String']}) => RafflePromiseChain & {get: <R extends RaffleRequest>(request: R, defaultValue?: (FieldsSelection<Raffle, R> | undefined)) => Promise<(FieldsSelection<Raffle, R> | undefined)>}),
    getRaffles: ((args?: {sortBy?: (SortOrder | null)}) => {get: <R extends RaffleRequest>(request: R, defaultValue?: ((FieldsSelection<Raffle, R> | undefined)[] | undefined)) => Promise<((FieldsSelection<Raffle, R> | undefined)[] | undefined)>})&({get: <R extends RaffleRequest>(request: R, defaultValue?: ((FieldsSelection<Raffle, R> | undefined)[] | undefined)) => Promise<((FieldsSelection<Raffle, R> | undefined)[] | undefined)>})
}

export interface QueryObservableChain{
    getRaffleById: ((args: {id: Scalars['String']}) => RaffleObservableChain & {get: <R extends RaffleRequest>(request: R, defaultValue?: (FieldsSelection<Raffle, R> | undefined)) => Observable<(FieldsSelection<Raffle, R> | undefined)>}),
    getRaffles: ((args?: {sortBy?: (SortOrder | null)}) => {get: <R extends RaffleRequest>(request: R, defaultValue?: ((FieldsSelection<Raffle, R> | undefined)[] | undefined)) => Observable<((FieldsSelection<Raffle, R> | undefined)[] | undefined)>})&({get: <R extends RaffleRequest>(request: R, defaultValue?: ((FieldsSelection<Raffle, R> | undefined)[] | undefined)) => Observable<((FieldsSelection<Raffle, R> | undefined)[] | undefined)>})
}

export interface RafflePromiseChain{
    createdAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    discord_link: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    mint_date: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    mint_price: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    official_link: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    raffle_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    registration_closed: ({get: (request?: boolean|number, defaultValue?: (Scalars['Boolean'] | undefined)) => Promise<(Scalars['Boolean'] | undefined)>}),
    registration_closes: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    twitter_link: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface RaffleObservableChain{
    createdAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    discord_link: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    mint_date: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    mint_price: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    official_link: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    raffle_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    registration_closed: ({get: (request?: boolean|number, defaultValue?: (Scalars['Boolean'] | undefined)) => Observable<(Scalars['Boolean'] | undefined)>}),
    registration_closes: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    twitter_link: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}