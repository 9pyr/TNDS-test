import React from "react"
import { TagLink, TagsContainer } from "./styled"

interface TagsProps {
  dataSource?: string[]
  renderLink?: (tag: string, index: number) => string
}

const Tags: React.FC<TagsProps> = ({
  dataSource = [],
  renderLink = () => {},
}) => {
  return (
    <TagsContainer>
      {dataSource.map((tag, tag_index) => (
        <TagLink
          to={{ search: renderLink(tag, tag_index) || "" }}
          key={tag_index}
        >
          {tag}
        </TagLink>
      ))}
    </TagsContainer>
  )
}

export default Tags
