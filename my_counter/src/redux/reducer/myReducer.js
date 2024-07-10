const initialState={
    count:0
}

const myReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'INCREMENT'://INCREMENT
            return {count:state.count+1};
        case 'DECREMENT':
            return {count:state.count-1};
        default: return state;
    }
};

export default myReducer;