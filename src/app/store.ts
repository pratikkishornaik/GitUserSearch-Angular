import { UserDetails } from './userDetails';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { ACTION_TYPES } from './actions';

export interface IAppState {

    userDetails: UserDetails[];

}

export const INITIAL_STATE: IAppState = {
    userDetails: []
}

export function rootReducer(state: IAppState, action): IAppState {

    switch (action.type) {

        case ACTION_TYPES.ADD_USER:
            return Object.assign({}, state, {
                userDetails: action.payload.items,
            })

        default:
            return state
    }
}