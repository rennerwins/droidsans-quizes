import React, { Component } from 'react'
import api from '../api'
import PropTypes from 'prop-types'

const UserAvatar = props => {
	let { profilePic, name } = props.user
	return <img className="user-avatar" src={profilePic} alt={name} />
}

UserAvatar.propTypes = {
	user: PropTypes.object.isRequired
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
						return <UserAvatar user={user} key={index} />
					})}

				</div>
			</div>
		)
	}
}

export default ShowResult
