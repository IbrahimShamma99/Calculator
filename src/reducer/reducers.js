import * as actionTypes from './actions';

const initialState = {
    display:""
};

const reducer = (state=initialState , action)=>{
    switch(actionTypes){
        case(actionTypes.BIND_VALUE):
            return {
                ...state,
                
            };
        case(actionTypes.EQUAL_VALUE):
            return {
                ...state,
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;