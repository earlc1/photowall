import _posts from '../data/posts'

/*Populate initially empty store with posts data
  Take action based on action type
  Return updated state*/
const postReducer = function posts(state = _posts, action) {
    console.log('Emit Action Payload: ' + action.index)
    switch(action.type) {
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index +1)]
        // Receive current state and action created from Form submit
        case 'ADD_POST': return[...state, action.post]
        default: return state
    }
}

export default postReducer