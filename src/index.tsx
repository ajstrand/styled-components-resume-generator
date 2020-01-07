/**
 * @class ExampleComponent
 */

import * as React from 'react'

import styles from './styles.css'

export interface Props  { text: string, onClick?:() => void }

const ExampleComponent = (props:Props) => {
    const {
      text,
      onClick,
    } = props

    return (
      <button className={styles.test} onClick={() => onClick && onClick()}>
        Example Component: {text}
      </button>
    )
}

export default ExampleComponent
