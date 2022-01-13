import { USER_AVERAGE_SESSIONS } from "../assets/data";

export const getAverageSessionsByUserId = (id) => USER_AVERAGE_SESSIONS.find((elt) => elt.userId === id)