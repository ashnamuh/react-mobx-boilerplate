import counterStore from './counter'
import articleStore from './article'

export const useStore = () => {
  return {
    counterStore,
    articleStore
  }
}