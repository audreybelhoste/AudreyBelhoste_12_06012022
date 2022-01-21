import axios from "axios";

export const getActivityByUserId = async (id) => {
	return axios.get(`http://localhost:3000/user/${id}/activity`).then(response => response.data)
}