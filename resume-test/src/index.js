/** @jsx h */
/** @jsxFrag Fragment */

import { h } from "preact";
import styles from './styles.module.css'

export const StyledResume = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
