import axios from "axios";

/**
 * Fetch user performance from the API 
 * @param { number } id User id 
 * @returns { Promise } A promise containing performance of the user
 */
 export const getPerformanceByUserId = async (id) => {
	try {
		const response = await axios.get(process.env.REACT_APP_URL + `/user/${id}/performance`)
		return response.data
	} catch (e) {
		alert('Le chargement des données a échoué.')
	}
}