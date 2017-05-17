import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
	return (
		<nav className="nav has-shadow">
			<div className="container">
				<div className="nav-left">
					<NavLink activeClassName="active" className="nav-item" exact to="/">
						Home
					</NavLink>
				</div>

				<div className="nav-right">
					<NavLink
						activeClassName="active"
						className="nav-item"
						to="/newquestion"
					>
						New Question
					</NavLink>
				</div>
			</div>
		</nav>
	)
}

export default Nav
