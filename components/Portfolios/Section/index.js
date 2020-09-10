import styles from './style.module.css'
import { IMAGE_PATH } from '../constants.js'
import { useInView } from 'react-intersection-observer'

export default function Section({portfolio, index}) {

  const [ref, inView] = useInView({threshold: 0.3})

  const image = (
    <span className={styles.container}> <img className={styles.image} src={IMAGE_PATH[portfolio.id]}/> </span>
  )

  const description = (
    <span className={styles.container}>
      <h1 className={styles.title}>{portfolio.title}</h1>
      <span className={styles.bio}>
        {portfolio.description}
      </span>
      <span>
        <a className={styles.link} href={portfolio.isComplete ? `/portfolios/${portfolio.id}` : `/construction`} target='_blank'>
          <span className={styles.button}>
            <h1 className={styles.text}>View</h1>
          </span>
        </a>
      </span>
    </span>
  )

  return (
    <div ref={ref}>
      {index % 2 == 0 &&
      <div className={inView ? styles.sectionIn : styles.section}>
        {image}
        {description}
      </div>
      }
      {index % 2 == 1 &&
      <div className={inView ? styles.sectionIn : styles.section}>
        {description}
        {image}
      </div>
      }
    </div>
  )
}