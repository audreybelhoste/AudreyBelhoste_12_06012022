import axios from "axios";

export const getAverageSessionsByUserId = (id) => {
	return axios.get(`http://localhost:3000/user/${id}/average-sessions`).then(response => response.data)
}