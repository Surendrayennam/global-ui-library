import React from 'react'
import styles from './styles.module.css'
import { Button } from './comonents'

const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { Button, ExampleComponent }
