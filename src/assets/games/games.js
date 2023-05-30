import blackjackUrl from './blackjack.png'
import diceUrl from './dice.png'
import pokerUrl from './poker.png'
import rouletteUrl from './roulette.png'
import slotUrl from './slot.png'

const games = [
  {
    id: 1,
    name: 'POKER',
    url: pokerUrl,
    gameCateory: 'CARD',
    creationDate: '12-16-2004',
    location: 'ESTONIA',
    numberOfGames: 50,
    gameconfigurations: 'difficult',
  },
  {
    id: 2,
    name: 'ROULETTE',
    url: rouletteUrl,
    gameCateory: 'TABLE',
    creationDate: '01-11-2022',
    location: 'ESTONIA',
    numberOfGames: 10,
    gameconfigurations: 'easy',
  },
  {
    id: 3,
    name: 'BLACK JACK',
    url: blackjackUrl,
    gameCateory: 'CARD',
    creationDate: '03-10-2018',
    location: 'ESTONIA',
    numberOfGames: 100,
    gameconfigurations: 'medium',
  },
  {
    id: 4,
    name: 'DICE',
    url: diceUrl,
    gameCateory: 'TABLE',
    creationDate: '05-07-2023',
    location: 'ESTONIA',
    numberOfGames: 5,
    gameconfigurations: 'medium',
  },
  {
    id: 5,
    name: 'SLOT',
    url: slotUrl,
    gameCateory: 'SLOT_MACHINE',
    creationDate: '07-06-2020',
    location: 'ESTONIA',
    numberOfGames: 25,
    gameconfigurations: 'easy',
  },
]

export default games
