import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

const Splitter = ({isVisible, onMouseDown}) => 
	isVisible 
		? <div className={styles.splitter} onMouseDown={ onMouseDown } />
		: null

const SecondView = ({ isVisible, second, height }) =>  
	isVisible
	? (
		<div className={styles.pane} style={{flex: '0 0 ' + height + '%'}}> 
			<div className={styles.paneContainer}>
				{second}
			</div>
		</div>
	)
	: null

export const SplitterGrid = ({ first, second, isVertical, isSecondInvisible, positionChanged }) => {
	const [height, setHeight] = useState(50)

	const onSplitterMouseDown = sevt => {
		const evt = sevt.nativeEvent
		if (evt.which != 1) 
			return
		const container = evt.target.parentElement.children
		const view1 = container[0]
		const splitter = container[1]
		const view2 = container[2]
		const size1 = isVertical ? view1.offsetHeight : view1.offsetWidth
		const size2 = isVertical ? view2.offsetHeight : view2.offsetWidth
		const initialPosition = isVertical ? evt.pageY : evt.pageX		

		const onmousemove = evt => {
			let delta = (isVertical ? evt.pageY : evt.pageX) - initialPosition
			if (delta < 10 - size1)
				delta = 10 - size1
			if (delta > (isVertical ? view1.parentElement.offsetHeight : view1.parentElement.offsetWidth) - 10 - size1 - 6)
				delta = (isVertical ? view1.parentElement.offsetHeight : view1.parentElement.offsetWidth) - 10 - size1 - 6

			const newSize1 = size1 + delta
			const newSize2 = size2 - delta

			const procent2 = newSize2 / (newSize2 + newSize1 + 
				(isVertical ? splitter.offsetHeight : splitter.offsetWidth)) * 100
			setHeight(procent2)
			if (positionChanged)
				positionChanged()

			evt.stopPropagation()
			evt.preventDefault()
		}

		const onmouseup = evt => {
			window.removeEventListener('mousemove', onmousemove, true)
			window.removeEventListener('mouseup', onmouseup, true)

			evt.stopPropagation()
			evt.preventDefault()
		}

		useEffect(() => {
			if (positionChanged)
				positionChanged()
		}, [isSecondInvisible])

		window.addEventListener('mousemove', onmousemove, true)
		window.addEventListener('mouseup', onmouseup, true)

		evt.stopPropagation()
		evt.preventDefault()        		
	}

	return (
		<div className={styles.splitterGridContainer + ' ' + (isVertical ? styles.isVertical : '') }>
			<div className={styles.pane}>
				<div className={styles.paneContainer}>
					{first}
				</div>
			</div>
			<Splitter isVisible={!isSecondInvisible} onMouseDown={onSplitterMouseDown} isVertical={isVertical} />
			<SecondView isVisible={!isSecondInvisible} second={second} height={height}/>
		</div>
	)
}
