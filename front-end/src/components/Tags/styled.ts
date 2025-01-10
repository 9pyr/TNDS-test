import styled from "styled-components"
import { Link } from "react-router-dom"

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;

  font-size: var(--font-small);

  &::-webkit-scrollbar {
    height: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background: #dadadaab;
    }
  }
`

export const TagLink = styled(Link)`
  cursor: pointer;
  display: inline-flex;
  padding: 0 6px;

  color: var(--color-text-gray);
  white-space: nowrap;
  text-decoration: none;

  transition-property: color;
  transition-duration: var(--anime-speed);

  &:hover {
    color: #000;
  }
`
