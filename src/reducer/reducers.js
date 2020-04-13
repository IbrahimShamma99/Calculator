import * as actionTypes from './actions';
import handleDisplayEqualize from './utils';

const initialState = {
    display:""
};

const reducer = (state=initialState , action)=>{
    switch(action.type){
        case(actionTypes.BIND_VALUE):
            return {
                display:state.display + action.NumberValue
            };
        case(actionTypes.EQUAL_VALUE):
            return {
                display:handleDisplayEqualize(state.display)
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;