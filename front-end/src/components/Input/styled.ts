import styled from "styled-components"

export const InputStyled = styled.input`
  flex: 1;
  outline: none;
  border: 1px solid transparent;
  border-radius: var(--radius-circle);
  background: var(--color-soft-gray);
  padding: 6px 18px;

  transition-property: background, border;
  transition-duration: var(--anime-speed);

  &:focus {
    border: 1px solid #000;
    background: #fff;
  }
  &::placeholder {
    text-align: center;
  }
`
