import axios from "axios";

/**
 * Fetch user average sessions from the API 
 * @param { number } id User id 
 * @returns { Promise } A promise containing average sessions of the user
 */
export const getAverageSessionsByUserId = async (id) => {
	try {
		const response = await axios.get(process.env.REACT_APP_URL + `/user/${id}/average-sessions`)
		return response.data
	} catch (e) {
		alert('Le chargement des données a échoué.')
	}
}