import fetch from 'node-fetch'
import styles from './style.module.css'
import { IMAGE_PATH } from '../constants'

export default function Post({post}) {
  const title = <h1 className={styles.title}>{post.title}</h1>

  const selectStyle = (style, isColumn) => `${style}${isColumn ? 'Column' : ''}`
  const renderText = (content, isColumn = false) => <span className={styles[selectStyle('text', isColumn)]}>{content.data}</span>
  const renderImage = (content, isColumn = false) => <img className={styles[selectStyle('image', isColumn)]} src={IMAGE_PATH[content.data]}/>

  const renderTextWithImage = (content) => {
    return (
      <div className={styles.textWithImage}>
        {content.data.map(item => item.type === 'text' ? renderText(item, true) : renderImage(item, true))}
      </div>
    )
  }

  return (
    <div className={styles.post}>
      {title}
        <span className={styles.content}>
          {post.contents.map(content => content.type === 'text' ? renderText(content) : content.type === 'image' ? renderImage(content) : renderTextWithImage(content))}
        </span>
    </div>
  )
}

// TODO: Before deploy, change localhost:3000 to angelagomba.com
export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/posts/${context.query.pid}`)
  const posts = await res.json()
  const post = posts[0]

  if (!post) {
    return { notFound: true }
  }

  return {
    props: { post }
  }
}
