import axios from "axios";

export const getPerformanceByUserId = (id) => {
	return axios.get(`http://localhost:3000/user/${id}/performance`).then(response => response.data)
}