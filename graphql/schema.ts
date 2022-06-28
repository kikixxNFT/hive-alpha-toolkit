import {
  asNexusMethod,
  enumType,
  makeSchema,
  objectType,
  queryType,
  mutationType,
  arg,
  nonNull,
  stringArg,
  idArg,
} from 'nexus'
import { DateTimeResolver } from 'graphql-scalars'
import * as path from 'path'

const Raffle = objectType({
  name: 'Raffle',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.string('url')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nonNull.string('name')
    t.string('official_link')
    t.string('registration_closes')
    t.string('mint_date')
    t.string('mint_price')
    t.string('raffle_time')
    t.string('twitter_link')
    t.string('discord_link')
    t.boolean('registration_closed')
  },
})

const DateTime = asNexusMethod(DateTimeResolver, 'DateTime')

const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
})

const Query = queryType({
  definition(t) {
    t.list.field('getRaffles', {
      type: 'Raffle',
      args: {
        sortBy: arg({ type: 'SortOrder' }),
      },
      resolve: async (_, args, ctx) => {
        return ctx.db.raffle.findMany({
          orderBy: { createdAt: args.sortBy || undefined },
        })
      },
    })

    t.field('getRaffleById', {
      type: 'Raffle',
      args: {
        id: nonNull(stringArg()),
      },
      resolve: async (_, args, ctx) => {
        try {
          return ctx.db.raffle.findUnique({ where: { id: args.id } })
        } catch (error) {
          throw new Error(`${error}`)
        }
      },
    })
  },
})

const Mutation = mutationType({
  definition(t) {
    t.field('createRaffle', {
      type: 'Raffle',
      args: {
        url: nonNull(stringArg()),
        name: nonNull(stringArg()),
        official_link: stringArg(),
        registration_closes: stringArg(),
        mint_date: stringArg(),
        mint_price: stringArg(),
        raffle_time: stringArg(),
        twitter_link: stringArg(),
        discord_link: stringArg(),
      },
      resolve: async (
        _,
        {
          url,
          name,
          official_link,
          registration_closes,
          mint_date,
          mint_price,
          raffle_time,
          twitter_link,
          discord_link,
        },
        ctx
      ) => {
        try {
          if (!url.includes('https://www.premint.xyz')) {
            throw Error(`Invalid URL: ${url}`)
          }

          const existingRaffle = await ctx.db.raffle.findUnique({
            where: { url },
          })
          if (existingRaffle) {
            return existingRaffle
          }

          const raffle = await ctx.db.raffle.create({
            data: {
              url,
              name,
              official_link,
              registration_closes,
              mint_date,
              mint_price,
              raffle_time,
              twitter_link,
              discord_link,
            },
          })

          return raffle
        } catch (error) {
          throw Error(`${error}`)
        }
      },
    })

    t.field('updateRaffleById', {
      type: 'Raffle',
      args: {
        id: nonNull(idArg()),
        url: stringArg(),
        name: stringArg(),
        official_link: stringArg(),
        registration_closes: stringArg(),
        mint_date: stringArg(),
        mint_price: stringArg(),
        raffle_time: stringArg(),
        twitter_link: stringArg(),
        discord_link: stringArg(),
      },
      resolve: (
        _,
        {
          id,
          url,
          name,
          official_link,
          registration_closes,
          mint_date,
          mint_price,
          raffle_time,
          twitter_link,
          discord_link,
        },
        ctx
      ) => {
        try {
          return ctx.db.raffle.update({
            where: { id },
            data: {
              url: url || undefined,
              name: name || undefined,
              official_link,
              registration_closes,
              mint_date,
              mint_price,
              raffle_time,
              twitter_link,
              discord_link,
            },
          })
        } catch (error) {
          throw Error(`${error}`)
        }
      },
    })

    t.field('deleteRaffleById', {
      type: 'Raffle',
      args: {
        id: nonNull(idArg()),
      },
      resolve: (_, { id }, ctx) => {
        try {
          return ctx.db.raffle.delete({
            where: { id },
          })
        } catch (error) {
          throw Error(`${error}`)
        }
      },
    })
  },
})

export const schema = makeSchema({
  types: [DateTime, Mutation, Query, Raffle, SortOrder],
  outputs: {
    schema: path.join(process.cwd(), 'graphql/schema.graphql'),
    typegen: path.join(process.cwd(), 'graphql/generated/nexus.d.ts'),
  },
  contextType: {
    module: path.join(process.cwd(), 'graphql/context.ts'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'db',
      },
    ],
  },
})
