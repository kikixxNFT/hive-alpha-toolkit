import React from 'react'
import {
  Navbar,
  Text,
  useMantineTheme,
  Box,
  Container,
  Loader,
  Divider,
  UnstyledButton,
  Grid,
  Transition,
  Table,
} from '@mantine/core'
import { ChampionsLogo } from '../components/ui/Svg/ChampionsLogo'
import { ChampionsChart } from '../components/ChampionsChart/ChampionsChart'
import { useMediaQuery } from '@mantine/hooks'
import { useAllBalancesQuery } from '../graphql/generated/graphql'
import { BigNumber, ethers } from 'ethers'

const graphData = [
  {
    id: 'misterchen',
    color: 'hsl(228, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 226,
      },
      {
        x: 'helicopter',
        y: 66,
      },
      {
        x: 'boat',
        y: 55,
      },
      {
        x: 'train',
        y: 30,
      },
      {
        x: 'subway',
        y: 279,
      },
      {
        x: 'bus',
        y: 232,
      },
      {
        x: 'car',
        y: 131,
      },
      {
        x: 'moto',
        y: 60,
      },
      {
        x: 'bicycle',
        y: 64,
      },
      {
        x: 'horse',
        y: 157,
      },
      {
        x: 'skateboard',
        y: 23,
      },
      {
        x: 'others',
        y: 207,
      },
    ],
  },
  {
    id: 'The.Real.Indiana',
    color: 'hsl(29, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 242,
      },
      {
        x: 'helicopter',
        y: 224,
      },
      {
        x: 'boat',
        y: 243,
      },
      {
        x: 'train',
        y: 259,
      },
      {
        x: 'subway',
        y: 29,
      },
      {
        x: 'bus',
        y: 56,
      },
      {
        x: 'car',
        y: 201,
      },
      {
        x: 'moto',
        y: 258,
      },
      {
        x: 'bicycle',
        y: 125,
      },
      {
        x: 'horse',
        y: 190,
      },
      {
        x: 'skateboard',
        y: 216,
      },
      {
        x: 'others',
        y: 12,
      },
    ],
  },
  {
    id: 'janova.eth',
    color: 'hsl(62, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 169,
      },
      {
        x: 'helicopter',
        y: 197,
      },
      {
        x: 'boat',
        y: 236,
      },
      {
        x: 'train',
        y: 79,
      },
      {
        x: 'subway',
        y: 242,
      },
      {
        x: 'bus',
        y: 248,
      },
      {
        x: 'car',
        y: 205,
      },
      {
        x: 'moto',
        y: 35,
      },
      {
        x: 'bicycle',
        y: 85,
      },
      {
        x: 'horse',
        y: 284,
      },
      {
        x: 'skateboard',
        y: 295,
      },
      {
        x: 'others',
        y: 198,
      },
    ],
  },
  {
    id: 'Capt_Rage',
    color: 'hsl(152, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 230,
      },
      {
        x: 'helicopter',
        y: 137,
      },
      {
        x: 'boat',
        y: 299,
      },
      {
        x: 'train',
        y: 258,
      },
      {
        x: 'subway',
        y: 220,
      },
      {
        x: 'bus',
        y: 264,
      },
      {
        x: 'car',
        y: 98,
      },
      {
        x: 'moto',
        y: 143,
      },
      {
        x: 'bicycle',
        y: 108,
      },
      {
        x: 'horse',
        y: 82,
      },
      {
        x: 'skateboard',
        y: 239,
      },
      {
        x: 'others',
        y: 78,
      },
    ],
  },
  {
    id: 'madrobot',
    color: 'hsl(216, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 12,
      },
      {
        x: 'helicopter',
        y: 25,
      },
      {
        x: 'boat',
        y: 44,
      },
      {
        x: 'train',
        y: 155,
      },
      {
        x: 'subway',
        y: 113,
      },
      {
        x: 'bus',
        y: 206,
      },
      {
        x: 'car',
        y: 49,
      },
      {
        x: 'moto',
        y: 185,
      },
      {
        x: 'bicycle',
        y: 127,
      },
      {
        x: 'horse',
        y: 197,
      },
      {
        x: 'skateboard',
        y: 19,
      },
      {
        x: 'others',
        y: 30,
      },
    ],
  },
]

export default function Home() {
  const theme = useMantineTheme()
  const mounted = useMediaQuery(`(min-width: ${theme.breakpoints.md}px)`, true)
  const { data, loading } = useAllBalancesQuery()

  if (loading) {
    return <Loader />
  }

  const rows = data?.allBalances?.data?.map((champ) => (
    <tr key={champ?._id}>
      <td>{champ?.name}</td>
      <td>{champ?.transactions}</td>
      <td>{`Ξ${(+ethers.utils.formatEther(
        BigNumber.from(champ?.balance)
      )).toFixed(4)}`}</td>
    </tr>
  ))

  return (
    <Container
      fluid
      sx={{
        padding: 0,
        height: '100vh',
        backgroundColor: '#181c1f',
        display: 'flex',
      }}
    >
      <Transition
        mounted={mounted}
        transition="slide-right"
        duration={400}
        timingFunction="ease"
      >
        {(styles) => (
          <Navbar
            style={styles}
            width={{ base: 300 }}
            sx={{
              backgroundColor: '#14171c',
              borderColor: '#374151',
            }}
          >
            <Navbar.Section p="sm">
              <ChampionsLogo />
              <Divider
                color="#374151"
                labelProps={{ color: '#A6A7AB' }}
                my="xs"
                label="Hive Alpha Toolkit"
                labelPosition="center"
              />
            </Navbar.Section>
            <Navbar.Section grow mt="md">
              <UnstyledButton
                sx={(theme) => ({
                  textAlign: 'center',
                  display: 'block',
                  width: '100%',
                  padding: theme.spacing.xs,
                  borderRadius: theme.radius.sm,
                  color:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[0]
                      : theme.black,

                  '&:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0],
                  },
                })}
              >
                <Text size="sm">Gas Pings</Text>
              </UnstyledButton>
              <UnstyledButton
                sx={(theme) => ({
                  textAlign: 'center',
                  borderLeftStyle: 'double',
                  borderLeftWidth: '4px',
                  borderLeftColor: 'blueviolet',
                  borderRightStyle: 'double',
                  borderRightWidth: '4px',
                  borderRightColor: 'blueviolet',
                  display: 'block',
                  width: '100%',
                  padding: theme.spacing.xs,
                  color: 'blueviolet',

                  '&:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0],
                  },
                })}
              >
                <Text size="sm">Champions League</Text>
              </UnstyledButton>
              <UnstyledButton
                sx={(theme) => ({
                  textAlign: 'center',
                  display: 'block',
                  width: '100%',
                  padding: theme.spacing.xs,
                  borderRadius: theme.radius.sm,
                  color:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[0]
                      : theme.black,

                  '&:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0],
                  },
                })}
              >
                <Text size="sm">ENS Hunter</Text>
              </UnstyledButton>
              <UnstyledButton
                sx={(theme) => ({
                  textAlign: 'center',
                  display: 'block',
                  width: '100%',
                  padding: theme.spacing.xs,
                  borderRadius: theme.radius.sm,
                  color:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[0]
                      : theme.black,

                  '&:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0],
                  },
                })}
              >
                <Text size="sm">Premint+ Listings</Text>
              </UnstyledButton>
              <UnstyledButton
                sx={(theme) => ({
                  textAlign: 'center',
                  display: 'block',
                  width: '100%',
                  padding: theme.spacing.xs,
                  borderRadius: theme.radius.sm,
                  color:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[0]
                      : theme.black,

                  '&:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0],
                  },
                })}
              >
                <Text size="sm">Mint-o-Matic</Text>
              </UnstyledButton>
            </Navbar.Section>
            <Navbar.Section>{/* Footer with user */}</Navbar.Section>
          </Navbar>
        )}
      </Transition>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: '10px',
        }}
      >
        <Box
          sx={{
            height: '400px',
            width: '99%',
          }}
        >
          <ChampionsChart data={graphData} />
        </Box>
        <Grid m={0} gutter="md">
          <Grid.Col xs={12} sm={6}>
            <Table>
              <thead>
                <tr>
                  <th>Champion</th>
                  <th># Trades</th>
                  <th>Account Balance</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </Grid.Col>
          <Grid.Col xs={12} sm={6}>
            Transaction History
          </Grid.Col>
        </Grid>
      </Box>
    </Container>
  )
}
