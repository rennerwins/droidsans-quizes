import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NewQuestionForm from './NewQuestionForm'
import ShowQuestion from './ShowQuestion'
import ShowResult from './ShowResult'
import Nav from './Nav'
import '../static/css/style.css'

class App extends Component {
	render() {
		return (
			<Router>
				<section>
					<Nav />
					<div className="container main-body">
						<Switch>
							<Route exact path="/" component={ShowQuestion} />
							<Route path="/newquestion" component={NewQuestionForm} />
							<Route path="/result" component={ShowResult} />
							<Route
								render={() => {
									return <p>Not Found</p>
								}}
							/>
						</Switch>
					</div>
				</section>
			</Router>
		)
	}
}
export default App
