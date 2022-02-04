import { USER_MAIN_DATA } from "../assets/data";
import axios from "axios";

/**
 * Fetch user informations from the API 
 * @param { number } id User id 
 * @returns { Promise } A promise containing informations about the user
 */
export const getUserById = async (id) => {
	if(process.env.REACT_APP_MOCKED_DATA === 'true') {
		const data = await new Promise((resolve) => { 
			resolve(USER_MAIN_DATA.find((elt) => elt.id == id))
		})
		return {data: data}
	} else {
		try {
			const response = await axios.get(process.env.REACT_APP_URL + `/user/${id}`)
			return response.data
		} catch (e) {
			alert('Le chargement des données a échoué.')
		}
	}
}