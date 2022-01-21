import axios from "axios";

export const getUserById = (id) => {
	return axios.get(`http://localhost:3000/user/${id}`).then(response => response.data)
}