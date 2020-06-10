import React from 'react'
import { useStore } from 'stores'
import { useObserver } from 'mobx-react-lite'

const Page: React.FC = () => {
  const { articleStore } = useStore()

  React.useEffect(() => {
    articleStore.fetch()
  }, [articleStore])

  return useObserver(() => (
    <div>
      <h1>Mandu page</h1>
      {articleStore.articles.map(article => <p key={article.slug}>{article.title}</p>)}
    </div>
  ))
}

export default Page
