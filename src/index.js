import React from 'react'
import styles from './styles.module.css'

export const SplitterGrid = props => {
    return (
		<div className={styles.test}>
			<div>
				{props.first}
			</div>
			<div>
				{props.second}
			</div>
		</div>
	)
}
