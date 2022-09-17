import styles from './style.module.css'
import { useInView } from 'react-intersection-observer'

export default function About({children}) {

  const [ref, inView] = useInView({threshold: 0.1})

  const title = (
    <span className={inView ? styles.sectionIn : styles.section}>
      <h1 className={styles.aboutText}>about</h1>
    </span>
  )

  // TODO: Add a cute gif!
  const animation = (
    <>
    { /* TODO */ }
    </>
  )

  const links = (
    <span className={styles.links}>
      <a href={'/bunch'} target='_blank' className={styles.link}>blog</a>
      <a href={'https://github.com/angelagomba'} target='_blank' className={styles.link}>github</a>
      <a href={'https://open.spotify.com/user/angelagomba'} target='_blank' className={styles.link}>spotify</a>
    </span>
  )

  const bio = (
    <span className={styles.bio}>
      I am a Software Engineer currently working at Instructure on the Outcomes Team. I graduated ('22) from 
      Northeastern University with a BS in Computer Science & Mathematics. My interest in CS began with 
      messing around with the html of my tumblr blog, which lead to my interest in frontend development. Aside from 
      programming, I also love music. I play the piano, violin, guitar, and sing. I am currently learning how to
      produce music in hopes of releasing music in the future.
    </span>
  )

  const buttons = (
    <span className={styles.buttons}>
      <a className={styles.button} href={'/resume.pdf'} target='_blank'>
        <span className={styles.buttonOutline}>
          <h1 className={styles.buttonText}>resume</h1>
        </span>
      </a>
    </span>
  )

  return (
    <div className={styles.about} ref={ref} >
      {title}
      <span className={inView ? styles.sectionIn : styles.section}>
        <span className={styles.aboutContent}>
          {links}
          {bio}
          {buttons}
        </span>
      </span>
    </div>
  )
}