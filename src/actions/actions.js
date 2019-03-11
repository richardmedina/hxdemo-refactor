import { actions } from './actiontypes'
import { Api } from '../Api'

export function UserGetAll ()
{
    return dispatch => { 
        Api.get ("/users")
            .then (response => {
                console.log (response)
                dispatch ({
                    type: actions.USER_GETALL,
                    payload: response.data
                })
            });
    }
}
