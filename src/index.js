import React from 'react'
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

export class SplitterGrid extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isVisible: true
		}
	}

	setSecondInvisible = isVisible => this.setState({isVisible})

    render() {
		return (
			<div className={styles.splitterGridContainer}>
				<div className={styles.pane}>
					<div className={styles.paneContainer}>
						{this.props.first(this.state, this.setSecondInvisible)}
					</div>
				</div>
				<SecondView isVisible={this.state.isVisible} second={this.props.second} />
			</div>
		)
	}
}
