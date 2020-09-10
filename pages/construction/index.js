import styles from './style.module.css'

export default function Construction() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span>
          <h1 className={styles.title}>
            Currently under construction!
          </h1>
        </span>
        <img className={styles.image} src={'/construction.gif'}/>
      </div>
    </div>
  )
}
