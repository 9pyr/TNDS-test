import styled from "styled-components"

export const ListStyled = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 300px);
  justify-content: center;

  margin-top: 10px;
  margin-bottom: 40px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 300px);
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 300px);
  }
  @media screen and (max-width: 630px) {
    gap: 0;
    grid-template-columns: repeat(1, 1fr);
  }
`

export const ContentEmpty = styled.div`
  text-align: center;
  margin-top: 10%;
`
