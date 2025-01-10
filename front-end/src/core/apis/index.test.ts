import { getTripsSearch } from "."

describe("getTripsSearch", () => {
  it("should return trips matching the search keyword", async () => {
    const result = await getTripsSearch("")

    expect(result).toEqual([
      {
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
    ])
  })
})
