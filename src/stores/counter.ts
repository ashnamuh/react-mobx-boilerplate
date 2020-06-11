import { observable, action } from 'mobx'

class CounterStore {
  @observable count: number
  constructor(count = 0) {
    this.count = count
  }
  @action
  increase() {
    this.count = this.count + 1
  }
  @action
  decrease() {
    this.count = this.count - 1
  }
}

export default new CounterStore()
