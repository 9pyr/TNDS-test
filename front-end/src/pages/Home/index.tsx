import React from "react"

import { Container } from "./styled"
import Trips from "./components/Trips"
import { Form } from "components"
import NavBar from "./components/NavBar"

const Home = () => {
  return (
    <Container>
      <Form>
        <NavBar />
        <main>
          <Trips />
        </main>
      </Form>
    </Container>
  )
}

export default Home
