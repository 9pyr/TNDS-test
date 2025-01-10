import React, { Suspense } from "react"
import Loading from "components/Loading"
import { TripModel } from "core/types"
import { ContentEmpty, ListStyled } from "./styled"

const Card = React.lazy(() => import("components/Card"))

interface ListProps {
  dataSource?: TripModel[]
  loading?: boolean
}

const List: React.FC<ListProps> = ({ dataSource = [], loading }) => {
  if (loading) {
    return <Loading />
  }

  if (dataSource.length === 0) {
    return <ContentEmpty>ไม่พบข้อมูล</ContentEmpty>
  }

  return (
    <Suspense fallback={<Loading />}>
      <ListStyled>
        {dataSource.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </ListStyled>
    </Suspense>
  )
}

export default List
