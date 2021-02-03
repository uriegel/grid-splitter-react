import React, { useState } from 'react'
import styles from './styles.module.css'

const SecondView = props => { 
	if (props.isVisible) 
		return (
			<div className={styles.pane}>
				<div className={styles.paneContainer}>
					{props.second()}
				</div>
			</div>
		)
	else return null
}

export const SplitterGrid = props => {
	const [isSecondVisible, setSecondVisible] = useState(true)
	return (
		<div className={styles.splitterGridContainer}>
			<div className={styles.pane}>
				<div className={styles.paneContainer}>
					{props.first(isSecondVisible, setSecondVisible)}
				</div>
			</div>
			<SecondView isVisible={isSecondVisible} second={props.second} />
		</div>
	)
}
