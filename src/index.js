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
	return (
		<div className={styles.splitterGridContainer + ' ' + (props.isVertical ? styles.isVertical : '') }>
			<div className={styles.pane}>
				<div className={styles.paneContainer}>
					{props.first()}
				</div>
			</div>
			<SecondView isVisible={props.isSecondVisible} second={props.second} />
		</div>
	)
}
