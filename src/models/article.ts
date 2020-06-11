import axios from 'axios'
import { Article } from 'types/article'

class ArticleModel {
  async fetch(limit?: number, offset?: number) {
    const { data } = await axios.get<{articlesCount: number; articles: Article[]}>('https://conduit.productionready.io/api/articles', {
      params: {
        limit: limit || 10,
        offset: offset || 0
      }
    })

    return data.articles
  }
}

export default new ArticleModel()
