// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiClient } from '@graphql/client'
import { allPremints } from '@graphql/queries/allPremints'

type RaffleData = {
  name: string
  status: 'lost' | 'register' | 'registered' | 'won' | 'unknown'
  updated_at: number
  created_at: number
  official_link?: string
  registration_closes?: string
  mint_date?: string
  mint_price?: string
  raffle_time?: string
  twitter_link?: string
  discord_link?: string
  auto_registered?: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RaffleData[] & never[]>
) {
  if (req.method !== 'GET') {
    res.status(405).send([])
    return
  }
  const raffles = await ApiClient.query({
    query: allPremints,
  })
  res.status(200).send(raffles?.data)
}
