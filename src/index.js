import React from 'react'
import styles from './styles.module.css'

export const SplitterGrid = props => {

	const callback = text => console.log('Das kommt aus dem Program', text)

    return (
		<div className={styles.splitterGridContainer}>
			<div className={styles.pane}>
				<div className={styles.paneContainer}>
					{props.first("erster", callback)}
				</div>
			</div>
			<div className={styles.pane}>
				<div className={styles.paneContainer}>
					{props.second("zweiter")}
				</div>
			</div>
		</div>
	)
}
