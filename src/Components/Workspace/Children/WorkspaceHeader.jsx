import React from 'react'
import styles from './WorkspaceHeaderStyles.module.css'

const WorkspaceHeader = (props) => {
  const renderTask = () => {
    props.onClick()
  }

  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Задачи</h2>
      <button className={styles.addTask} onClick={renderTask}>+ СОЗДАТЬ</button>
      <button className={styles.buttonFeedb}><a className={styles.feedback} href="https://docs.google.com/forms/d/e/1FAIpQLSdeeQjNqBTcICcR90D17vcC9OFtep4u3UUd3ge9TzMFcBKs0g/viewform?usp=sf_link">Отзыв</a></button>
    </div>
  )
}
export default WorkspaceHeader
