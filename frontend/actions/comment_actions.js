import * as ApiUtil from '../util/comment_api_util';

export const REC_COMMENT = 'REC_COMMENT';//COMMENTs
export const REC_ALL_COMMENTS = 'REC_ALL_COMMENTS';//COMMENTs
export const REMOVE_COMMENT = 'REMOVE_COMMENT';//COMMENTs
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';//errors
export const CLEAR_ERRORS = 'CLEAR_ERRORS';//errors

const recAllComments = (comments) => {
    return {
        comments,
        type: REC_ALL_COMMENTS
    }
}

const recComment = (comment) => {
    return {
        comment,
        type: REC_COMMENT
    }
}

const removeComment = (commentId) => {
    //;
    return {
        commentId,
        type: REMOVE_COMMENT
    }
}

const recCommentErrors = (errors) => {
    return {
        type: RECEIVE_COMMENT_ERRORS,
        errors
    }
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

//thunk actions
export const fetchComment = (commentId) => dispatch => {
    return ApiUtil.fetchComment(commentId)
        .then((comment) => dispatch(recComment(comment)),
            error => dispatch(recCommentErrors(error.responseJSON)));
}

export const fetchAllComments = (cardId) => dispatch => {
    return ApiUtil.fetchAllComments(cardId)
        .then((comments) => { 
            dispatch(recAllComments(comments)) 
        },
            error => {
                dispatch(recCommentErrors(error.responseJSON))
            });
}

export const createComment = (cardId, comment) => dispatch => {
    return ApiUtil.createComment(cardId, comment)
        .then((comment) => {
            dispatch(recComment(comment))
        },
            error => {
                dispatch(recCommentErrors(error.responseJSON))
        });
}

export const updateComment = (comment) => dispatch => {
    return ApiUtil.updateComment(comment)
        .then((comment) => dispatch(recComment(comment)),
            error => dispatch(reccommentErrors(error.responseJSON))
        );
}

export const deleteComment = (commentId) => dispatch => {
    return ApiUtil.deleteComment(commentId)
        .then((comment) => {
            //;
            dispatch(removeComment(comment.commentId))
        },
            error => {
                dispatch(recCommentErrors(error.responseJSON))
        });
}