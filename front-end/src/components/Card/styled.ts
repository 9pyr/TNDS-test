import styled from "styled-components"
import Button from "../Button"
import { ImagesIcon as BaseImagesIcon } from "icons"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  border-radius: var(--radius);

  min-height: 461px;
  max-height: 461px;
  background: #fff;
`

export const ImageHighlight = styled.figure`
  position: relative;
  margin: 0;
  min-height: 200px;
  max-height: 200px;
  overflow: hidden;

  img {
    object-position: center;
    object-fit: cover;
  }
`

export const ImagesIcon = styled(BaseImagesIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
`

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 18px;
  height: 100%;
`

export const Title = styled.a`
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: var(--color-black);
  text-decoration: none;

  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
  margin-top: 8px;

  font-size: var(--font-large);
  font-weight: bolder;
  word-break: keep-all;

  &:hover {
    text-decoration: underline;
  }
`

export const Description = styled.div`
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: var(--font-medium);
  color: var(--color-text-gray);

  -webkit-line-clamp: 3;
  line-clamp: 2;
  line-height: 1.3;
  word-break: keep-all;
`

export const Footer = styled.div`
  display: flex;
  padding: 14px 0 0 0;
  margin-top: auto;
`

export const ReadMoreButton = styled(Button)`
  min-width: 70px;

  background: var(--color-primary);
  color: var(--color-soft-gray);

  > .svg_icon {
    margin-left: 10px;

    transition: transform var(--anime-speed);
  }

  &:hover > .svg_icon {
    transform: translateX(6px);
  }
`
