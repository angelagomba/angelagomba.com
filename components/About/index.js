import styles from './style.module.css'
import { useInView } from 'react-intersection-observer'

export default function About() {

  const [ref, inView] = useInView({threshold: 0.1})

  return (
    <div className={styles.about} ref={ref} >
      <span className={inView ? styles.sectionIn : styles.section}> <img className={styles.image} src={'/self.png'}/> </span>
      <span className={inView ? styles.sectionIn : styles.section}>
        <span className={styles.bio}>
          I am a Computer Science & Mathematics major at Northeastern University ('21). My interest in computer science began
          with messing around with the html of my tumblr blog, which lead to my interest in front-end, cross-platform, and 
          fullstack development. Aside from programming, I also love music. I play the piano, violin, guitar, and sing. 
          I am continuing my musical adventure as a singer and guitarist in my band. In the next section you'll see my portfolios, 
          which display my interests in photography and writing as well.
        </span>

        <span>
          <a className={styles.link} href={'/resume.pdf'} target='_blank'>
            <span className={styles.button}>
              <h1 className={styles.text}>Resume</h1>
            </span>
          </a>
        </span>
      </span>
    </div>
  )
}