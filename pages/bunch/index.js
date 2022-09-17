import Categories from './components/Categories'
import fetch from 'node-fetch'
import styles from './style.module.css'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { IMAGE_PATH } from './constants'
import { useState } from 'react'

export default function Bunch({ posts }) {

  const { width, height } = useWindowDimensions()
  const isBrowser = width >= 600
  const categories = [...new Set(posts.map(post => post.category))]
  const [categoryFilters, setCategoryFilters] = useState(new Set())

  const blogTitle = (
    <h1 className={styles.title}>Bunch's Blog</h1>
  )

  const postCategory = category => (
    <span className={styles.category}>{category}</span>
  )

  const postTitle = title => (
    <span className={styles.title}>{title}</span>
  )

  const postDescription = description => (
    <span className={styles.description}>{description}</span>
  )

  const readMoreButton = (
    <span className={styles.readMore}>
      <a>Read More</a>
      <img className={styles.arrow} src={IMAGE_PATH['arrow']}/>
    </span>
  )

  const renderPostBlock = post => {
    if (categoryFilters.size === 0 || categoryFilters.has(post.category)) {
      return (
        <a href={`bunch/posts/${post.id}`} className={styles.post}>
          <div className={styles.block}>
            {!isBrowser &&  <img className={styles.image} src={IMAGE_PATH[post.previewIndex]}/>}
            <span className={styles.postInfo}>
              {postCategory(post.category)}
              {postTitle(post.title)}
              {postDescription(post.description)}
              {readMoreButton}
            </span>
            {isBrowser &&  <img className={styles.image} src={IMAGE_PATH[post.previewIndex]}/>}
          </div>
        </a>
      )
    }
  }

  return (
    <body id='page' className={styles.page}>
      <span className={styles.container}>
        {blogTitle}
        {
          <Categories
            categories={categories}
            categoryFilters={categoryFilters}
            setCategoryFilters={setCategoryFilters} 
          />
        }
        {posts.map((post, _index) => renderPostBlock(post))}
      </span>
    </body>
  )
}

// TODO: Before deploy, change localhost:3000 to angelagomba.com
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/posts')
  const posts = await res.json()

  if (!posts) {
    return { notFound: true }
  }

  return {
    props: { posts }
  }
}
