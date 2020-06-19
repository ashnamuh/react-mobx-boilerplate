import { observable, action } from 'mobx'
import articleModel, { ArticleModel } from 'models/article'
import { Article } from 'types/article'

export class ArticleStore {
  constructor() {
  }
  @observable articles: Article[] = []
  @action
  async fetch() {
    try {
      // const articles = await this.articleModel.fetch()
      // this.articles = articles
      this.articles = []
    } catch (err) {
      console.error(err)
    }
  }
}

export default new ArticleStore()
