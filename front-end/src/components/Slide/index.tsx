import React, { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "icons"
import { ButtonNext, ButtonPrev, SlideContainer } from "./styled"

const SlidePhotos = ({ children }: React.PropsWithChildren) => {
  const [stateSlide, setStateSlide] = useState(0)

  const getPrevState = (state: number) => {
    if (!children || !Array.isArray(children)) return 0
    return state - 1 < 0 ? children.length - 1 : state - 1
  }

  const getNextState = (state: number) => {
    if (!children || !Array.isArray(children)) return 0
    return state + 1 === children.length ? 0 : state + 1
  }

  const prevStateSlide = () => {
    setStateSlide(getPrevState(stateSlide))
  }

  const nextStateSlide = () => {
    setStateSlide(getNextState(stateSlide))
  }

  return (
    <SlideContainer>
      {Array.isArray(children) ? (
        <>
          <ButtonPrev
            data-testid="button-prev"
            onClick={prevStateSlide}
            title="Previous Slide"
          >
            <ChevronLeftIcon width={6} />
          </ButtonPrev>
          {children[stateSlide]}
          <ButtonNext
            data-testid="button-next"
            onClick={nextStateSlide}
            title="Next Slide"
          >
            <ChevronRightIcon width={6} />
          </ButtonNext>
        </>
      ) : (
        children
      )}
    </SlideContainer>
  )
}

export default SlidePhotos
