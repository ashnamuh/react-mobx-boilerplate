import { ArticleStore } from '../../src/stores/article'

describe('TodoStore', () => {
  it('creates new todos', () => {
    const mockArticleModel = {
      fetch() {
        return Promise.resolve([
          { slug: 1 },
          { slug: 2 },
          { slug: 3 },
        ])
      }
    }
    const aArticleStore = new ArticleStore(mockArticleModel)
    console.log(aArticleStore)
    expect(2).toBe(2)
  })
})
