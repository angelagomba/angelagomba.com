import Section from './Section/index.js'
import styles from './style.module.css'
import content from '../../public/content/portfolios.json'

export default function Portfolios() {

  const portfolios = content.portfolios.map((p, index) => <Section portfolio={p} index={index} />)

  return (
    <div className={styles.container}>
      {portfolios}
    </div>
  )
}