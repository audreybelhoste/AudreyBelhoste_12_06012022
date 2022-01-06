import { USER_MAIN_DATA } from "../assets/data";

export const getUserById = (id) => USER_MAIN_DATA.find((elt) => elt.id === id)