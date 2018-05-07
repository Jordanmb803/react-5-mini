let intial_state = {
    past: [],
    num: 0,
    future: []
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'



export default function reducer(state = intial_state, action) {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, { num: state.num + action.payload })
        case DECREMENT:
            return Object.assign({}, state, { num: state.num - action.payload })
       default:
            return state
    }
}

export function increment_num(val){
    return {
        type: INCREMENT,
        payload: val
    }
}


export function decrement_num(val){
    return {
        type: DECREMENT,
        payload: val
    }
}