import styles from './style.module.css'
import Typed from 'typed.js';
import { useEffect } from 'react'

export default function Header() {

  useEffect(() => {
    const options = {
      strings: ['Software Engineer', 'Musician', 'Photographer', 'Writer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed('#subtitle', options);
    return () => {
      typed.destroy();
    };
});

  return (
    <div>
      <h1 className={styles.title}>
        Hi, my name is <span className={styles.text}>Angela Gomba</span>
      </h1>

      <h1 className={styles.title}>
        I'm a <span className={styles.text} id='subtitle' />.
      </h1>
    </div>
  )
}