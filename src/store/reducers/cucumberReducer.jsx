import * as actiontype from '../action'

const initialState ={
    cucumber: 0
}

const cucumberReducer = (state = initialState, action) =>{
    switch(action.type){
        case actiontype.ADDCUCUMBER:
            return {
                ...state,
                cucumber: state.cucumber + action.value
            }
        
        case actiontype.SUBSTRACTCUCUMBER:
            return{
                ...state,
                cucumber: state.cucumber - action.value
            }
        default:
            return state;
    }

}
export default cucumberReducer;