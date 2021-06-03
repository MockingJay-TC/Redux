import * as actiontype from "../action"

const initialState ={
    mangoes: 0
}

const mangoReducer = (state = initialState, action) =>{
    switch(action.type){
        case actiontype.ADDMANGOES:
            return {
                ...state,
                mangoes: state.mangoes + action.value
            }
        
        case actiontype.SUBTRACTMANGOES:
            return{
                ...state,
                mangoes: state.mangoes - action.value
            }
        default:
            return state;
    }

}
export default mangoReducer;