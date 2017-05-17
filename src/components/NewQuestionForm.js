import React, { Component } from 'react'
import api from '../api'
import { Redirect } from 'react-router-dom'

class NewQuestionForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			question: '',
			choices: [],
			counter: 0,
			lastQuestion: false,
			answer: '',
			success: false
		}
	}

	addMoreAnswer = () => {
		this.setState(prevState => {
			return {
				counter: ++prevState.counter
			}
		})
	}

	submitNewQuestion = e => {
		e.preventDefault()
		let { question, choices, lastQuestion } = this.state
		api.createNewQuestion(question, choices, lastQuestion).then(res => {
			if (res.status === 'done') {
				this.setState(() => {
					return {
						success: true
					}
				})
			}
		})
	}

	handleQuestion = e => {
		let { value } = e.target
		this.setState(() => {
			return {
				question: value
			}
		})
	}

	handleChoice = (index, e) => {
		let { value } = e.target
		let { choices } = this.state
		choices[index] = value
		this.setState({
			choices
		})
	}

	checkLastQuestion = e => {
		this.setState(prevState => {
			return {
				lastQuestion: !prevState.lastQuestion
			}
		})
	}

	render() {
		let inputLists = []
		for (var i = 0; i <= this.state.counter; i++) {
			inputLists.push(
				<input
					style={{ marginBottom: '6px' }}
					type="text"
					className="input"
					key={i}
					placeholder={`Choice ${i + 1}`}
					value={this.state.choices[i] || ''}
					onChange={this.handleChoice.bind(this, i)}
				/>
			)
		}

		if (this.state.success) {
			return <Redirect to="/" />
		}

		return (
			<div className="form">
				<form onSubmit={this.submitNewQuestion}>
					<div className="field">
						<label htmlFor="question" className="label">Question</label>
						<p className="control">
							<input
								type="text"
								className="input"
								placeholder="Question"
								value={this.state.question}
								onChange={this.handleQuestion}
							/>
						</p>
					</div>

					<div className="field">
						<label htmlFor="choices" className="label">Choices</label>
						<p className="control">
							{inputLists}
						</p>
					</div>

					<div className="field">
						<p className="control">
							<label className="checkbox">
								<input
									type="checkbox"
									onClick={this.checkLastQuestion}
									checked={this.state.lastQuestion}
								/>
								Last question?
							</label>
						</p>
					</div>

					<div className="field is-grouped">
						<p className="control">
							<button
								type="button"
								className="button is-primary"
								onClick={this.addMoreAnswer}
							>
								+
							</button>
						</p>
						<p className="control">
							<button type="submit" className="button is-primary">
								Submit
							</button>
						</p>
					</div>
				</form>
			</div>
		)
	}
}

export default NewQuestionForm
