import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility'


const initialState={
    businessUserSchedule:[],
    modBusinessSchedule:[],
    failSchedule:false
};

const failSchedule = ( state, action ) => {
    return updateObject( state,{
        failSchedule:action.failSchedule
    });
};

const loadUserScheduleBusiness = ( state, action ) => {
    return updateObject( state,{
        businessUserSchedule:action.businessUserSchedule
    });
};

const loadModBusinessSchedule = ( state, action ) => {
    return updateObject( state,{
        modBusinessSchedule:action.modBusinessSchedule
    });
}

const reducer = (state=initialState,action) =>{
    switch(action.type) {
        case actionTypes.LOAD_BUSINESS_SCHEDULE: return loadUserScheduleBusiness(state,action);
        case actionTypes.LOAD_MOD_BUS_SCHEDULE: return loadModBusinessSchedule( state, action );
        case actionTypes.LOAD_SCHEDULE_FAIL: return failSchedule( state, action );
        default: return state;
    }
}

export default reducer
