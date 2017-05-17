import React, { Component } from 'react'
import api from '../api'

const userAvatar = {
	width: '80px',
	borderRadius: '50%',
	margin: '6px'
}

class ShowResult extends Component {
	constructor(props) {
		super(props)

		this.state = {
			count: 0,
			result: '',
			winner: [],
			error: '',
			amount: 0
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
					error,
					amount: winner.length
				}
			})
		})
	}

	render() {
		return (
			<div className="container">
				<div className="content">
					<h2>จำนวนผู้เข้าร่วมโหวต : {this.state.count}</h2>
					<h2>ผลโหวตสูงสุด : {this.state.result} ({this.state.amount})</h2>

					{this.state.winner.map((user, index) => {
						return (
							<img
								style={userAvatar}
								src={user.profilePic}
								key={index}
								alt={user.name}
							/>
						)
					})}

				</div>
			</div>
		)
	}
}

export default ShowResult
