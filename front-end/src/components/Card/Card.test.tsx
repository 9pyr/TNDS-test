import React from "react"
import { render } from "@testing-library/react"
import Card from "."
import { vi } from "vitest"
import { MemoryRouter } from "react-router-dom"

const defaultProps = {
  item: {
    title: "เที่ยวฝรั่งเศส เช็กอินเมืองในฝัน เก็บแลนด์มาร์กสุดปังในปารีส",
    eid: "9",
    url: "https://www.wongnai.com/trips/travel-around-paris-france",
    description:
      "1 ใน Dream Destination ของใครหลาย ๆ คนคงหนีไม่พ้นการเที่ยวฝรั่งเศส เพราะที่มีทั้งหอไอเฟล พิพิธภัณฑ์ลูฟวร์ และ Disneyland บอกเลยว่าทริปนี้เราเก็บมาให้ครบ!\n\nสำหรับใครที่ชอบที่เที่ยวแนวสถาปัตยกรรม ร้านอาหารสวย ๆ และชอปปิงของแบรนด์เนมเราขอแนะนำ “เที่ยวฝรั่งเศส เช็กอินเมืองในฝัน เก็บแลนด์มาร์กสุดปังในปารีส” เพราะตอบโจทย์สุด ๆ ไปเลย รวมมาให้แล้วกับที่เที่ยวดังต่าง ๆ ทั้งหอไอเฟล พิพิธภัณฑ์ลูฟวร์ และ Disneyland แบบว่าแต่งตัวสวย ๆ เดินถ่ายรูป ชมวิว ทานอาหารไปเรื่อย ๆ เหมาะอย่างยิ่งกับสายชิล เน้นพักผ่อน ส่วนสายลุย สายธรรมชาติข้ามเลยจ้า",
    photos: [
      "https://img.wongnai.com/p/1600x0/2019/05/23/4057d08671744f8e8fd9e939b5e60087.jpg",
      "https://img.wongnai.com/p/1600x0/2019/05/23/0176c0c06f2449849e826844733ef1e4.jpg",
      "https://img.wongnai.com/p/1600x0/2019/05/23/0e56670f9e0e43e7b26c312583ecca51.jpg",
      "https://img.wongnai.com/p/1600x0/2019/05/23/7a677ee703ab448b9ca20c847aa74ce3.jpg",
    ],
    tags: ["จุดถ่ายรูป", "ต่างประเทศ", "ฝรั่งเศส"],
  },
}

const setupValues = (propOverrides = {}) => ({
  ...defaultProps,
  ...propOverrides,
})

describe("Card Component", () => {
  vi.mock("react-lazyload", () => ({
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
  }))

  it("render has props", async () => {
    const props = setupValues()
    const { queryByTestId, getByText } = render(
      <MemoryRouter>
        <Card {...props} />
      </MemoryRouter>
    )

    const imageElement = queryByTestId("img-highlight")
    const titleElement = queryByTestId("title-testid")
    const descriptionElement = getByText(
      new RegExp("1 ใน Dream Destination", "i")
    )
    const readMoreElement = getByText(new RegExp("อ่านต่อ", "i")).closest("a")

    expect(imageElement).toHaveAttribute("src", defaultProps.item.photos[0])
    expect(titleElement).not.toBeNull()
    expect(titleElement!.textContent).toBe(props.item.title)
    expect(titleElement).toHaveAttribute("href", defaultProps.item.url)
    expect(descriptionElement).toBeInTheDocument()
    expect(readMoreElement).toHaveAttribute("href", defaultProps.item.url)
  })

  it("render props undefined", () => {
    const { queryByTestId, getByText } = render(
      <MemoryRouter>
        <Card />
      </MemoryRouter>
    )

    const imageElement = queryByTestId("img-testid")
    const titleElement = queryByTestId("title-testid")
    const descriptionElement = queryByTestId("description-testid")
    const readMoreElement = getByText(new RegExp("อ่านต่อ", "i")).closest("a")

    expect(imageElement).toBeNull()
    expect(titleElement?.textContent).toBe("")
    expect(titleElement).not.toHaveAttribute("href")
    expect(descriptionElement?.textContent).toBe("")
    expect(readMoreElement).not.toHaveAttribute("href")
  })
})
