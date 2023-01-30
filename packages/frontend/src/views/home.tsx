import { useEffect, useState } from 'react'

import { getHelloWorld } from '../api/my-server'
import { Container } from '../components/container'

export const Home = () => {
  const [helloWorldText, setHelloWorldText] = useState('')

  useEffect(() => {
    getHelloWorld().then((text) => setHelloWorldText(text))
  }, [])

  return (
    <Container>
      <p className="text-2xl">{helloWorldText}</p>
    </Container>
  )
}
