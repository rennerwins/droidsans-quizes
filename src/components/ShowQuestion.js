import React, { Component } from 'react'
import api from '../api'
import { Redirect } from 'react-router-dom'

class ShowQuestion extends Component {
	constructor(props) {
		super(props)

		this.state = {
			question: '',
			choices: [],
			status: '',
			showResult: false
		}
	}

	componentDidMount() {
		api.getQuestion().then(res => {
			let { q, choices } = res.quiz
			this.setState(() => {
				return {
					question: q,
					choices
				}
			})
		})
	}

	startQuiz = () => {
		api.startQuiz().then(res => {
			if (res.status === 'done') {
				this.setState(() => {
					return {
						status: 'Started'
					}
				})
			}
		})
	}

	endQuiz = () => {
		api.closeAnswerPeriod().then(res => {
			if (res.status === 'done') {
				this.setState(() => {
					return {
						status: 'Closed'
					}
				})
			}
		})
	}

	showResult = () => {
		this.setState({
			showResult: true
		})
	}

	render() {
		let choices = this.state.choices.map((choice, index) => {
			return <div className="box" key={index}>{choice}</div>
		})

		if (this.state.showResult) {
			return <Redirect to="/result" />
		}

		return (
			<div className="content">
				<div className="container">
					{this.state.status}
					<h1>{this.state.question}</h1>
					{choices}

					<button className="button is-primary" onClick={this.startQuiz}>
						Start
					</button>
					<button className="button is-danger" onClick={this.endQuiz}>
						End
					</button>
					<button className="button is-info" onClick={this.showResult}>
						Result
					</button>
				</div>
			</div>
		)
	}
}

export default ShowQuestion
