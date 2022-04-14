import { WishListItem } from './WishList'

it("can create a Instance of a model", () => {
  const item = WishListItem.create({
    name: "test",
    price: 30,
    image: "images/test.jpg"
  })
  expect(item.price).toBe(30)
  expect(item.image).toBe("images/test.jpg")
})

it("can create a wishLst item",  ()=>{
  const list = WishList.create({
    items: [{""}]
  })
})