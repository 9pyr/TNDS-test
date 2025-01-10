import React from "react"
import useGetTrips from "."
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { renderHook } from "@testing-library/react-hooks"
import { vi } from "vitest"
import { FormProvider, useForm } from "react-hook-form"

const queryClient = new QueryClient()

const Wrapper = ({ children }: React.PropsWithChildren) => {
  const methods = useForm()
  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider {...methods}>{children}</FormProvider>
    </QueryClientProvider>
  )
}

describe("useGetTrips", () => {
  vi.mock("core/apis", () => ({
    getTripsSearch: vi.fn().mockResolvedValue([
      {
        title: "เที่ยวฝรั่งเศส เช็กอินเมืองในฝัน เก็บแลนด์มาร์กสุดปังในปารีส",
        eid: "9",
        url: "https://www.wongnai.com/trips/travel-around-paris-france",
        description:
          "1 ใน Dream Destination ของใครหลาย ๆ คนคงหนีไม่พ้นการเที่ยวฝรั่งเศส เพราะที่มีทั้งหอไอเฟล พิพิธภัณฑ์ลูฟวร์ และ Disneyland บอกเลยว่าทริปนี้เราเก็บมาให้ครบ!",
        photos: [
          "https://img.wongnai.com/p/1600x0/2019/05/23/4057d08671744f8e8fd9e939b5e60087.jpg",
          "https://img.wongnai.com/p/1600x0/2019/05/23/0176c0c06f2449849e826844733ef1e4.jpg",
          "https://img.wongnai.com/p/1600x0/2019/05/23/0e56670f9e0e43e7b26c312583ecca51.jpg",
          "https://img.wongnai.com/p/1600x0/2019/05/23/7a677ee703ab448b9ca20c847aa74ce3.jpg",
        ],
        tags: ["จุดถ่ายรูป", "ต่างประเทศ", "ฝรั่งเศส"],
      },
    ]),
  }))

  vi.mock("react-router-dom", () => ({
    useSearchParams: vi.fn().mockReturnValue([new URLSearchParams(), vi.fn()]),
  }))

  afterEach(() => {
    queryClient.clear()
  })

  it("should render useGetTrips", async () => {
    const { result, waitFor } = renderHook(useGetTrips, {
      wrapper: ({ children }: React.PropsWithChildren) => (
        <Wrapper>{children}</Wrapper>
      ),
    })

    await waitFor(() => result.current.isSuccess)

    expect(result.current.data).toContainEqual({
      title: "เที่ยวฝรั่งเศส เช็กอินเมืองในฝัน เก็บแลนด์มาร์กสุดปังในปารีส",
      eid: "9",
      url: "https://www.wongnai.com/trips/travel-around-paris-france",
      description: expect.stringContaining("เที่ยวฝรั่งเศส"),
      photos: expect.arrayContaining([
        "https://img.wongnai.com/p/1600x0/2019/05/23/4057d08671744f8e8fd9e939b5e60087.jpg",
      ]),
      tags: ["จุดถ่ายรูป", "ต่างประเทศ", "ฝรั่งเศส"],
    })
  })
})
