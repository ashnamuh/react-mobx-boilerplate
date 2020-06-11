import { observable, action } from 'mobx'
import ArticleModel from 'models/article'
import { Article } from 'types/article'

class ArticleStore {
  @observable articles: Article[] = []
  @action
  async fetch() {
    try {
      const articles = await ArticleModel.fetch()
      this.articles = articles
    } catch (err) {
      console.error(err)
    }
  }
}

export default new ArticleStore()
