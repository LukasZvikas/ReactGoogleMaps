
import axios from "axios";

const {FETCH_ROUTES} from "./types";

export const fetchRoutes = city => async dispatch => {

	const res = await axios.post("/route", city);

	dispatch({type: FETCH_ROUTES, payload: res.data})



}