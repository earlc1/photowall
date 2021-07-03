// ACTION CREATORS

/* Remove Photo
   index: Specify photo to remove*/
export function removePost(index) {
    return{
        type: 'REMOVE_POST',
        index
    }
}

export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
}