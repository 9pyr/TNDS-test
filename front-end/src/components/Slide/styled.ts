import styled, { css } from "styled-components"

const buttonStyles = css`
  opacity: 0;
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  background: #ffffffaa;
  border: none;
  border-radius: var(--radius-circle);

  top: 50%;
  transform: translateY(-50%);

  width: 22px;
  height: 22px;

  transition: opacity var(--anime-speed);

  cursor: pointer;
`

export const ButtonPrev = styled.button`
  ${buttonStyles}

  left: 10px;
`

export const ButtonNext = styled.button`
  ${buttonStyles}

  right: 10px;
`

export const SlideContainer = styled.div`
  display: block;
  height: 100%;
  position: relative;

  &:hover {
    ${ButtonPrev}, ${ButtonNext} {
      opacity: 1;
    }
  }
`
