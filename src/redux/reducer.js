import _posts from '../data/posts'
import {combineReducers} from 'redux'


function comments(state=[], action) {
    console.log('comments reducer')
    switch (action.type) {
        // Append new comment, updating state, restructure and return array
        case 'ADD_COMMENT':
            // If no comments exist for photo
            if(!state[action.postId]) { //action.postId brackets indicate object.  action.comment brackets indicate array
                return {...state, [action.postId]: [action.comment]}    // Updating state inside reducer
            } else {
                return {...state, [action.postId]: [...state[action.postId], action.comment]}
            }
            default: return state
    }
}

/*Populate initially empty store with posts data
  Take action based on action type
  Return updated state*/
function posts(state = _posts, action) {
    console.log('posts reducer')
    switch(action.type) {
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index +1)]
        // Receive current state and action created from Form submit
        case 'ADD_POST': return[...state, action.post]
        default: return state
    }
}

const rootReducer = combineReducers({posts, comments})

export default rootReducer