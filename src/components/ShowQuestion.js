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
			showResult: false,
			isLastQuestion: false
		}
	}

	componentDidMount() {
		api.getQuestion().then(res => {
			console.log(res)
			let { q, choices, isLastQuestion } = res.quiz
			this.setState(() => {
				return {
					question: q,
					choices,
					isLastQuestion
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

	closeAnswerPeriod = () => {
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

	endQuizNow = () => {
		api.endQuizNow().then(res => {
			if (res.status === 'done') {
				this.setState(() => {
					return {
						status: 'Quiz ended'
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
					{this.state.isLastQuestion
						? <button className="button is-danger" onClick={this.endQuizNow}>
								End
							</button>
						: <button
								className="button is-danger"
								onClick={this.closeAnswerPeriod}
							>
								End
							</button>}

					<button className="button is-info" onClick={this.showResult}>
						Result
					</button>
				</div>
			</div>
		)
	}
}

export default ShowQuestion
