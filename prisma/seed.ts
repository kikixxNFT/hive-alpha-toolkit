import { PrismaClient } from '@prisma/client'
import { data } from './data/raffles'
const prisma = new PrismaClient()

async function main() {
  await prisma.raffle.createMany({
    data: data,
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
