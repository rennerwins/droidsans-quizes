import React, { Component } from 'react'
import api from '../api'

class ShowResult extends Component {
	constructor(props) {
		super(props)

		this.state = {
			count: 0,
			result: '',
			winner: [],
			error: ''
		}
	}

	componentDidMount() {
		api.getVoteResult().then(res => {
			let { count, result, winner, error } = res
			this.setState(() => {
				return {
					count,
					result,
					winner,
					error
				}
			})
		})
	}

	render() {
		return (
			<div>
				count : {this.state.count}
				result: {this.state.result}
				winner: {this.state.winner.map((user, index) => {
					return <img src={user.profilePic} key={index} alt={user.name} />
				})}
			</div>
		)
	}
}

export default ShowResult
