import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'DaniKOrdo',
    name: 'DaniK',
    isFollowing: false
  },
  {
    userName: 'Victorino',
    name: 'unzip_',
    isFollowing: true
  },
  {
    userName: 'Pau',
    name: '_aikito',
    isFollowing: true
  },
  {
    userName: 'Juan',
    name: 'Kiruzutto',
    isFollowing: false
  }
]


export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
