import React from "react"
import SearchInput from "../SearchInput"
import { Nav, Title } from "./styled"
import { RouteIcon } from "icons"

const NavBar = () => {
  return (
    <Nav>
      <Title>
        เที่ยวไหนดี <RouteIcon width={20} />
      </Title>
      <SearchInput />
    </Nav>
  )
}

export default NavBar
