import { USER_ACTIVITY } from "../assets/data";

export const getActivityByUserId = (id) => USER_ACTIVITY.find((elt) => elt.userId === id)