import React from 'react'
import styles from './styles.module.css'

export const SplitterGrid = props => {
    return (
		<div className={styles.splitterGridContainer}>
			<div className={styles.pane}>
				<div className={styles.paneContainer}>
					{props.first}
				</div>
			</div>
			<div className={styles.pane}>
				<div className={styles.paneContainer}>
					{props.second}
				</div>
			</div>
		</div>
	)
}
