import { ArticleStore } from './article'

test('mobx test', () => {
  const AS = new ArticleStore()
  console.log(AS.articles)
})
