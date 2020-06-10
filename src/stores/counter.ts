import { observable } from 'mobx'

export const counterStore = observable({
  _count: 0,
  increase() {
    console.log(11)
    this._count = this._count + 1
  },
  decrease() {
    this._count = this._count - 1
  },
  get count() {
    return this._count
  },
})
