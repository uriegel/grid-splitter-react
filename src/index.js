import React, { useState } from 'react'
import styles from './styles.module.css'

const Splitter = props => {
	if (props.isVisible) 
		return <div className={styles.splitter} onMouseDown={ props.onMouseDown } />
	else 
		return null
}

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
	const onSplitterMouseDown = evt => {
		console.log("On Splitter", evt)
		if (evt.which != 1)
			return
	}

	return (
		<div className={styles.splitterGridContainer + ' ' + (props.isVertical ? styles.isVertical : '') }>
			<div className={styles.pane}>
				<div className={styles.paneContainer}>
					{props.first()}
				</div>
			</div>
			<Splitter isVisible={props.isSecondVisible} onMouseDown={onSplitterMouseDown} />
			<SecondView isVisible={props.isSecondVisible} second={props.second} />
		</div>
	)
}
