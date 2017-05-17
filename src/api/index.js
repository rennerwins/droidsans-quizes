// ----------------------------------------------
// This file contains all the REST api functions
// ----------------------------------------------

import axios from 'axios'

// Base URL -- https://dsmbot.herokuapp.com/
const url = 'https://dsmbot.herokuapp.com'
const v = 'v2'

// Ready to start -- /changeReadyToStart
const startQuiz = () => {
	return axios.get(`${url}/changeReadyToStart`).then(res => {
		return res.data
	})
}

// Close answer period -- /closeAnswerTime
const closeAnswerPeriod = () => {
	return axios.get(`${url}/closeAnswerTime`).then(res => {
		return res.data
	})
}

// Get question -- /v2/getQuestion
const getQuestion = () => {
	return axios.get(`${url}/${v}/getQuestion`).then(res => {
		return res.data
	})
}

// Get users data -- /v2/getAllUsersInfo
const getUsersData = () => {
	return axios.get(`${url}/${v}/getAllUsersInfo`).then(res => {
		return res.data
	})
}

// Get vote result -- /v2/getVoteResult
const getVoteResult = () => {
	return axios.get(`${url}/${v}/getVoteResult`).then(res => {
		return res.data
	})
}

// Create new question -- /v2/processQuizForm
const createNewQuestion = (question, choices, lastQuestion) => {
	return axios
		.post(`${url}/processQuizForm`, {
			question,
			choices,
			lastQuestion
		})
		.then(res => {
			return res.data
		})
}

// Export function
module.exports = {
	getQuestion,
	getUsersData,
	getVoteResult,
	startQuiz,
	closeAnswerPeriod,
	createNewQuestion
}
