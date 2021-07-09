// REDUX ACTION CREATORS

export function addComment(comment, postId) {
    return {
                type: 'ADD_COMMENT',
                comment,
                postId
    }
}

export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
}

/* Remove Photo
   - index: Specify photo to remove*/
export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index
    }
}