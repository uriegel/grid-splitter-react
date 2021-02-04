import React, { useEffect, useState, useRef } from 'react'
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
	const splitterContainer = useRef(null);
	const [height, setHeight] = useState(0)
	const [isSecondVisible, setIsSecondVisible] = useState(false)

	useEffect(() => {
		if (props.isSecondVisible != isSecondVisible) {
			setIsSecondVisible(props.isSecondVisible)
			if (props.isSecondVisible && height) {
				const view2 = splitterContainer.current.children[2] 
				view2.style.flex = props.isVertical ? `0 0 ${height * splitterContainer.current.clientHeight / 100.0}px` : `0 0 ${height}%`
			}
			if (props.visibilityChanged)
				props.visibilityChanged(props.isSecondVisible)
		}
	})

	const onSplitterMouseDown = sevt => {
		const evt = sevt.nativeEvent
		if (evt.which != 1) 
			return
		const container = evt.target.parentElement.children
		const view1 = container[0]
		const splitter = container[1]
		const view2 = container[2]
		const size1 = props.isVertical ? view1.offsetHeight : view1.offsetWidth
		const size2 = props.isVertical ? view2.offsetHeight : view2.offsetWidth
		const initialPosition = props.isVertical ? evt.pageY : evt.pageX		
		const containerControl = evt.target.parentElement

		const onmousemove = evt => {
			let delta = (props.isVertical ? evt.pageY : evt.pageX) - initialPosition
			if (delta < 10 - size1)
				delta = 10 - size1
			if (delta > (props.isVertical ? view1.parentElement.offsetHeight : view1.parentElement.offsetWidth) - 10 - size1 - 6)
				delta = (props.isVertical ? view1.parentElement.offsetHeight : view1.parentElement.offsetWidth) - 10 - size1 - 6

			const newSize1 = size1 + delta
			const newSize2 = size2 - delta

			const procent2 = newSize2 / (newSize2 + newSize1 + 
				(props.isVertical ? splitter.offsetHeight : splitter.offsetWidth)) * 100
			setHeight(procent2)
			view1.style.flexGrow = `1`
			view2.style.flex = 
				props.isVertical ? `0 0 ${procent2 * containerControl.clientHeight / 100.0}px` : `0 0 ${procent2}%`
			if (props.positionChanged)
				props.positionChanged()

			evt.stopPropagation()
			evt.preventDefault()
		}

		const onmouseup = evt => {
			window.removeEventListener('mousemove', onmousemove, true)
			window.removeEventListener('mouseup', onmouseup, true)

			evt.stopPropagation()
			evt.preventDefault()
		}

		window.addEventListener('mousemove', onmousemove, true)
		window.addEventListener('mouseup', onmouseup, true)

		evt.stopPropagation()
		evt.preventDefault()        		
	}

	return (
		<div ref={splitterContainer} className={styles.splitterGridContainer + ' ' + (props.isVertical ? styles.isVertical : '') }>
			<div className={styles.pane}>
				<div className={styles.paneContainer}>
					{props.first()}
				</div>
			</div>
			<Splitter isVisible={props.isSecondVisible} onMouseDown={onSplitterMouseDown} isVertical={props.isVertical} />
			<SecondView isVisible={props.isSecondVisible} second={props.second} />
		</div>
	)
}
