import styles from './style.module.css'

export default function Categories({ categories, categoryFilters, setCategoryFilters }) {

  const handleCategoryClick = (category) => {
    const newFilters = new Set(categoryFilters)
    let isSelected = false
    newFilters.forEach((filter) => {
      if (filter === category) {
        isSelected = true
        newFilters.delete(category)
        setCategoryFilters(newFilters)
      }
    })
    if (!isSelected) {
      newFilters.add(category)
      setCategoryFilters(newFilters)
    }
  }

  const renderCategory = category => {
    const style = categoryFilters.has(category) ? 'Selected' : ''
    return (
      <span className={styles[`button${style}`]} onClick={() => {handleCategoryClick(category)}} >
        <h2 className={styles[`buttonText${style}`]}>{category}</h2>
      </span>
    )
  }

  return (
    <div className={styles.categories}>
      {categories.map(category => renderCategory(category))}
    </div>
  )

}