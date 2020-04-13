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
        case(actionTypes.BIND_VALUE):
            return {
                ...state,
            }
    }
}


export default reducer;