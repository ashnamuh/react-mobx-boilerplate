import { observable, action } from 'mobx'
import articleModel, { ArticleModel } from 'models/article'
import { Article } from 'types/article'

export class ArticleStore {
  articleModel: ArticleModel;
  constructor(articleModel: ArticleModel) {
    this.articleModel = articleModel
  }
  @observable articles: Article[] = []
  @action
  async fetch() {
    try {
      const articles = await this.articleModel.fetch()
      this.articles = articles
    } catch (err) {
      console.error(err)
    }
  }
}

export default new ArticleStore(articleModel)
