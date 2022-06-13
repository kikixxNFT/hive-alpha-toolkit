// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiClient } from '@graphql/client'
import { createPremint } from '@graphql/mutations/createPremint'
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
  res: NextApiResponse
) {
  if (req.method !== 'POST' || !req?.body?.url.includes('premint.xyz')) {
    res.status(405).send({})
    return
  }
  const raffles = await ApiClient.query({
    query: allPremints,
  })
  if (raffles.data.includes(req?.body?.url)) {
    res.status(200).send({})
    return
  }

  const { url, raffle }: { url: string; raffle: RaffleData } = req.body
  await ApiClient.mutate({
    mutation: createPremint,
    variables: {
      data: {
        url: url,
        ...raffle,
      },
    },
  })
  res.status(200).send({})
}
