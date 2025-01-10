import React, { useMemo } from "react"
import { ArrowRightIcon } from "icons"
import { Slide, Tags } from "components"
import { TripModel } from "core/types"
import {
  CardContainer,
  Description,
  Detail,
  Footer,
  ImageHighlight,
  ReadMoreButton,
  Title,
  ImagesIcon,
} from "./styled"
import { LazyLoadImage } from "react-lazy-load-image-component"

interface CardProps {
  item?: TripModel
}

const Card: React.FC<CardProps> = ({ item = {} }) => {
  const { url, title, description, photos = [], tags } = item

  const renderPhotos = useMemo(
    () =>
      photos.map((photo, index) => (
        <LazyLoadImage
          key={index}
          src={photo}
          alt="img-highlight"
          width="100%"
          height="100%"
          data-testid="img-highlight"
        />
      )),
    [photos]
  )

  return (
    <CardContainer data-testid="card-item">
      <ImageHighlight>
        <Slide>{renderPhotos}</Slide>
        {photos.length > 0 && <ImagesIcon width={20} fill="#fff" />}
      </ImageHighlight>
      <Detail>
        <Tags dataSource={tags} renderLink={(tag) => `?keyword=${tag}`} />
        <Title
          href={url}
          title={title}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="title-testid"
        >
          {title}
        </Title>
        <Description>
          <p data-testid="description-testid">{description}</p>
        </Description>
        <Footer>
          <ReadMoreButton href={url} target="_blank" rel="noopener noreferrer">
            อ่านต่อ
            <ArrowRightIcon className="svg_icon" width={12} fill="#fff" />
          </ReadMoreButton>
        </Footer>
      </Detail>
    </CardContainer>
  )
}

export default Card
