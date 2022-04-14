import { types } from 'mobx-state-tree'


const data = {
  name: "test",
  price: 30,
  image: "images/test.jpg"
}

export const WishListItem = types.model({
  name: types.string,
  price: types.number,
  image: types.optional(types.string, "")
})


export const WishList = types.modes({
  items: types.optional(types.array(WishListItem), []),
})