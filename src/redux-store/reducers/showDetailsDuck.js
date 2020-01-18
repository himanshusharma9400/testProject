import NetworkService from './../../service/networkservice'
import {IMDB_BASE_URL} from "../../commons/constants";

export const actions = {
    getIMDBRating: payload => dispatch => {
        NetworkService.get(
            null,IMDB_BASE_URL,'',payload.params,
            data => payload.onSuccess(data),
            error => payload.onError(error)
        )
    }
}