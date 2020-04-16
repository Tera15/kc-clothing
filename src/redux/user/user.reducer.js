import  UserActionTypes  from './user.types'

const INITIAL_STATE = () => ({
    currentUser: null,
    error: null
})


const userReducer = (state = INITIAL_STATE, action) => {
     switch (action.type) {
         
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null // sets error back to null if there was error state 
            };
            case UserActionTypes.SIGN_OUT_SUCCESS:
                return {
                    ...state,
                    currentUser: null,
                    error: null
                }
            // can stack cases that return the same to reduce code writing
            case UserActionTypes.SIGN_IN_FAILURE:
            case UserActionTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
     }
};

export default userReducer;